import { NextRequest, NextResponse } from 'next/server';

// ═══════════════════════════════════════════
// HUAXING PCBA — Contact Form API Route
// Anti-spam: honeypot + Turnstile + rate limit
// ═══════════════════════════════════════════

// ── Rate limiting (in-memory, resets on cold start) ──
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;       // max requests per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// ── Config (set env vars on Vercel / Hostinger) ──
const SMTP_HOST  = process.env.SMTP_HOST  || 'smtp.hostinger.com';
const SMTP_PORT  = Number(process.env.SMTP_PORT) || 465;
const SMTP_USER  = process.env.SMTP_USER  || 'sales@huaxingpcba.com';
const SMTP_PASS  = process.env.SMTP_PASS  || '';
const SMTP_TO    = process.env.SMTP_TO    || 'sales@huaxingpcba.com';

// Cloudflare Turnstile (optional — if not set, skips verification)
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            || request.headers.get('x-real-ip')
            || '127.0.0.1';

    // ── Rate limit check ──
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    // ── Honeypot check ──
    if (formData.get('_honeypot')) {
      // Bot detected — silently accept so it thinks it succeeded
      return NextResponse.json({ success: true });
    }

    // ── Turnstile verification (if configured) ──
    if (TURNSTILE_SECRET) {
      const token = formData.get('cf-turnstile-response') as string;
      if (!token) {
        return NextResponse.json(
          { error: 'Security check required. Please refresh and try again.' },
          { status: 400 }
        );
      }

      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(TURNSTILE_SECRET)}&response=${encodeURIComponent(token)}&remoteip=${encodeURIComponent(ip)}`,
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return NextResponse.json(
          { error: 'Security check failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // ── Parse fields ──
    const name    = (formData.get('name')    as string)?.trim() || '';
    const email   = (formData.get('email')   as string)?.trim() || '';
    const phone   = (formData.get('phone')   as string)?.trim() || '';
    const company = (formData.get('company') as string)?.trim() || '';
    const message = (formData.get('message') as string)?.trim() || '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // ── Send email ──
    if (SMTP_PASS) {
      const { createTransport } = await import('nodemailer');
      const transporter = createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: true,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"${name}" <${SMTP_USER}>`,
        replyTo: email,
        to: SMTP_TO,
        subject: `=?UTF-8?B?${Buffer.from(`HUAXING — New Inquiry from ${name}`).toString('base64')}?=`,
        text: [
          `NEW INQUIRY`,
          ``,
          `Name:    ${name}`,
          `Email:   ${email}`,
          `Phone:   ${phone || 'N/A'}`,
          `Company: ${company || 'N/A'}`,
          `IP:      ${ip}`,
          ``,
          `Message:`,
          `${message}`,
          ``,
          `---`,
          `Submitted: ${new Date().toISOString()}`,
        ].join('\n'),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Failed to send. Please email us directly at sales@huaxingpcba.com.' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
