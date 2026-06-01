'use client';
import { useState, useEffect, useRef, FormEvent } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/926d2b4f4b2b452b841fba2f8d1af724';

// ── Floating label input ──
function FloatingField({ name, type = 'text', label, required = false, placeholder = '', rows }: {
  name: string; type?: string; label: string; required?: boolean; placeholder?: string; rows?: number;
}) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  const bc = floated ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-gray-200 hover:border-gray-300';
  const cls = `w-full px-4 pt-5 pb-2 text-sm border bg-transparent rounded-xl outline-none transition-all duration-200 ${bc}${rows ? ' resize-none' : ''}`;
  const sp = { name, required, placeholder: placeholder || ' ', value, onFocus: () => setFocused(true), onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue((e.target as HTMLInputElement).value), className: cls };
  return (
    <div className="relative">
      {rows ? <textarea {...sp} rows={rows} /> : <input {...sp} type={type} />}
      <label className={`absolute left-4 pointer-events-none transition-all duration-200 bg-white px-1 ${floated ? '-top-2.5 text-xs text-brand-600 font-medium' : 'top-3.5 text-sm text-gray-400'}`}>
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    </div>
  );
}

function Spinner() {
  return <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>;
}

export default function InquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isOpen) {
      const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', h);
      setError('');
      return () => window.removeEventListener('keydown', h);
    }
  }, [isOpen, onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true); setError('');
    try {
      const form = formRef.current; if (!form) return;
      const fd = new FormData(form);
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        window.location.href = '/thank-you';
      } else {
        setError(data.message || 'Failed to send. Please email us directly.');
        setSubmitting(false);
      }
    } catch {
      setError('Network error. Please email us at sales@huaxingpcba.com.');
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[if-fade-in_0.2s_ease-out]">
      <style>{`@keyframes if-scale-in{from{opacity:0;transform:scale(.92) translateY(16px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes if-fade-in{from{opacity:0}to{opacity:1}}`}</style>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md cursor-pointer" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ animation: 'if-scale-in .35s cubic-bezier(.16,1,.3,1)' }}>
        <button type="button" onClick={onClose} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all cursor-pointer" aria-label="Close">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/25">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Get a Free Quote</h3>
            <p className="text-sm text-gray-400 mt-1.5">We typically respond within 24 hours</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* FormSubmit email config */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="HUAXING PCBA — New Inquiry" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting HUAXING PCBA!

We have received your inquiry and our engineering team will review it within 24 hours. You will receive a detailed quote with free DFM (Design for Manufacturing) analysis.

What happens next:
- Our engineers review your requirements and files
- We prepare a customized quotation for your project
- You receive a detailed response within one business day

If you have any urgent questions, please reply to this email or contact us directly:
📧 sales@huaxingpcba.com
📍 Shenzhen, Guangdong, China

— HUAXING PCBA Team" />

            {/* Anti-spam */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px]" />

            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingField name="name" label="Full Name" required />
              <FloatingField name="email" type="email" label="Email Address" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingField name="company" label="Company" />
              <FloatingField name="phone" type="tel" label="Phone" />
            </div>
            <FloatingField name="message" label="Message" required rows={4} />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Attachment <span className="text-gray-400 font-normal">(Gerber, BOM, CAD)</span></label>
              <input type="file" name="attachment" className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 file:cursor-pointer file:transition-colors cursor-pointer" />
            </div>

            <button type="submit" disabled={submitting} className="w-full py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer">
              {submitting ? <><Spinner /><span>Sending...</span></> : 'Submit Inquiry'}
            </button>
            {error && <p className="text-sm text-red-600 text-center bg-red-50 p-3 rounded-lg">{error}</p>}
            <p className="text-xs text-gray-400 text-center">Your information is safe with us. We&apos;ll respond within 24 hours.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
