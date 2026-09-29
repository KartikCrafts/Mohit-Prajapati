import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
  scopeNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  scopeNotes
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preSelectedService || 'Website Development');
  const [message, setMessage] = useState(scopeNotes || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setService(preSelectedService);
    }
  }, [preSelectedService]);

  useEffect(() => {
    if (scopeNotes) {
      setMessage(scopeNotes);
    }
  }, [scopeNotes]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Mohit, my name is ${name || 'Client'}.\nI want to discuss: ${service}.\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nNotes: ${message || 'Please contact me.'}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#221D1A]/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FAF5EE] border border-[#D5C1AE] rounded-3xl shadow-2xl p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#6E5E52] hover:text-[#221D1A] hover:bg-[#EAE0D3] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/30 flex items-center justify-center mx-auto text-[#2E7D32]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#221D1A]">
              Thank You, {name}!
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4D42] max-w-sm mx-auto leading-relaxed">
              Your inquiry has been logged directly for Mohit Prajapati. Expect a personalized response within 12 hours.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#2E7D32] hover:bg-[#256829] rounded-xl shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs font-medium text-[#221D1A] hover:bg-[#EAE0D3] rounded-xl transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C6246]">
                Priority Consultation
              </div>
              <h3 className="font-display text-2xl font-bold text-[#221D1A] mt-1">
                Schedule Project Discovery
              </h3>
              <p className="text-xs sm:text-sm text-[#615144] mt-1">
                Discuss timeline, scope, and feasibility directly with Mohit Prajapati.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#3C3026] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#EFE3D5] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#9A8778]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#3C3026] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#EFE3D5] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#9A8778]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3C3026] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 00000"
                    className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#EFE3D5] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#9A8778]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3C3026] mb-1">
                  Interested Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#EFE3D5] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246]"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3C3026] mb-1">
                  Project Notes or Goals
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview or questions..."
                  className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#EFE3D5] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#9A8778]"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Request to Mohit</span>
                </button>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#221D1A] bg-[#EFE3D5] hover:bg-[#E5D4C2] border border-[#DFCAB4] rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
