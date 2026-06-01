import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Hostinger SMTP — set these env vars in Hostinger hPanel
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465;
const SMTP_USER = process.env.SMTP_USER || 'info@huaxingpcba.com';
const SMTP_PASS = process.env.SMTP_PASS || '';
const SMTP_TO   = process.env.SMTP_TO   || 'info@huaxingpcba.com';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Honeypot check
    if (formData.get('_honeypot')) {
      return NextResponse.json({ success: true });
    }

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

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`,
      replyTo: email,
      to: SMTP_TO,
      subject: `HUAXING — New Inquiry from ${name}`,
      text: [
        `NEW INQUIRY`,
        ``,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone}`,
        `Company: ${company}`,
        ``,
        `Message:`,
        `${message}`,
        ``,
        `---`,
        `Submitted: ${new Date().toISOString()}`,
      ].join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Failed to send. Please email us directly at info@huaxingpcba.com.' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
