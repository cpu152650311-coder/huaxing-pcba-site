'use client';
import { useState, useEffect } from 'react';

// ── Floating label input field ──
function FloatingField({
  name,
  type = 'text',
  label,
  required = false,
  placeholder = '',
  rows,
}: {
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  const borderClass = floated
    ? 'border-brand-500 ring-2 ring-brand-500/20'
    : 'border-gray-200 hover:border-gray-300';

  const baseInputClass =
    'w-full px-4 pt-5 pb-2 text-sm border bg-transparent rounded-xl outline-none transition-all duration-200';

  const sharedProps = {
    name,
    required,
    placeholder: placeholder || ' ',
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue((e.target as HTMLInputElement).value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: `${baseInputClass} ${borderClass}`,
  };

  return (
    <div className="relative">
      {rows ? (
        <textarea {...sharedProps} rows={rows} className={`${sharedProps.className} resize-none`} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 bg-white px-1 ${
          floated
            ? '-top-2.5 text-xs text-brand-600 font-medium'
            : 'top-3.5 text-sm text-gray-400'
        }`}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    </div>
  );
}

// ── Main Modal ──
export default function InquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const FORM_ENDPOINT = 'https://formsubmit.co/926d2b4f4b2b452b841fba2f8d1af724';

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[if-fade-in_0.2s_ease-out]">
      <style>{`
        @keyframes if-scale-in {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes if-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ animation: 'if-scale-in 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 active:scale-95 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-200 cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/25">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Get a Free Quote</h3>
            <p className="text-sm text-gray-400 mt-1.5">We typically respond within 24 hours</p>
          </div>

          {/* Form — submits directly to FormSubmit for built-in honeypot anti-spam */}
          <form
            action={FORM_ENDPOINT}
            method="POST"
            encType="multipart/form-data"
            className="space-y-5"
          >
            {/* ── FormSubmit configuration ── */}
            <input type="hidden" name="_next" value="https://huaxingpcba.com/thank-you/" />
            <input type="hidden" name="_subject" value="HUAXING PCBA — New Inquiry" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting HUAXING PCBA. We have received your inquiry and will respond within 24 hours with a detailed quote and free DFM analysis." />

            {/* Honey pot — invisible to humans, traps bots (FormSubmit's built-in anti-spam) */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0 h-0 w-0"
            />

            {/* ── Row: Name + Email ── */}
            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingField name="name" label="Full Name" required />
              <FloatingField name="email" type="email" label="Email Address" required />
            </div>

            {/* ── Row: Company + Phone ── */}
            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingField name="company" label="Company" />
              <FloatingField name="phone" type="tel" label="Phone" />
            </div>

            {/* ── Message ── */}
            <FloatingField name="message" label="Message" required rows={4} />

            {/* ── File attachment ── */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Attachment <span className="text-gray-400 font-normal">(Gerber, BOM, CAD files)</span>
              </label>
              <input
                type="file"
                name="attachment"
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100 file:cursor-pointer file:transition-colors duration-200 cursor-pointer"
              />
            </div>

            {/* ── Submit ── */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 active:scale-[0.98] cursor-pointer"
            >
              Submit Inquiry
            </button>

            <p className="text-xs text-gray-400 text-center">
              Your information is safe with us. We&apos;ll respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
