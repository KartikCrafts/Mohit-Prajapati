import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    timeline: 'Within 2-3 weeks',
    budget: '$1,000 - $3,000',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const copyDetails = () => {
    const text = `Inquiry for Mohit Prajapati:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nTimeline: ${formData.timeline}\nDetails: ${formData.details}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappInquiryUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Mohit, my name is ${formData.name || 'a client'}.\nI am interested in: ${formData.service}.\nEmail: ${formData.email || 'N/A'}\nTimeline: ${formData.timeline}\nBrief: ${formData.details || 'Let us discuss details.'}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] border-t border-[#E8DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Value Props (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="right" delay={0.1}>
              <div>
                <div className="text-xs font-semibold text-[#8C6246] uppercase tracking-wider mb-2">
                  Initiate Collaboration
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221D1A] tracking-tight leading-tight text-balance">
                  Let's Discuss Your Project Requirements.
                </h2>
                <p className="mt-3 text-sm text-[#54463C] leading-relaxed">
                  Whether you have a detailed functional spec or a back-of-the-napkin concept, 
                  send over your details. Mohit Prajapati personally reviews every inquiry within 12 hours.
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="space-y-3 mt-8">
                <a
                  href="https://wa.me/919876543210?text=Hi%20Mohit,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#EFE3D5] hover:bg-[#E9DAC8] border border-[#DFCAB4] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2E7D32]/10 border border-[#2E7D32]/20 flex items-center justify-center text-[#2E7D32] shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#221D1A] group-hover:text-[#2E7D32] transition-colors">
                      Direct WhatsApp Chat
                    </div>
                    <div className="text-xs text-[#6B5A4D] font-mono mt-0.5">
                      +91 98765 43210
                    </div>
                    <div className="text-[11px] text-[#2E7D32] font-medium mt-0.5">
                      Fastest response time (~15 mins)
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:mohit.prajapati@techstudio.dev?subject=Project%20Inquiry%20for%20Mohit%20Prajapati"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#EFE3D5] hover:bg-[#E9DAC8] border border-[#DFCAB4] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8C6246]/10 border border-[#8C6246]/20 flex items-center justify-center text-[#8C6246] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#221D1A] group-hover:text-[#8C6246] transition-colors">
                      Email Consultation
                    </div>
                    <div className="text-xs text-[#6B5A4D] font-mono mt-0.5">
                      mohit.prajapati@techstudio.dev
                    </div>
                    <div className="text-[11px] text-[#786659] mt-0.5">
                      mohitprajapati.work@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#EFE3D5] border border-[#DFCAB4]">
                  <div className="w-12 h-12 rounded-xl bg-[#2A1F18]/10 border border-[#2A1F18]/20 flex items-center justify-center text-[#2A1F18] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#221D1A]">
                      Availability & Timezones
                    </div>
                    <div className="text-xs text-[#6B5A4D] mt-0.5">
                      Mon – Sat: 9:00 AM – 8:00 PM IST
                    </div>
                    <div className="text-[11px] text-[#786659] mt-0.5">
                      Flexible overlap for US/EU clients
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="rounded-3xl bg-[#EFE3D5] border border-[#DFCAB4] p-7 sm:p-9 shadow-md">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/30 flex items-center justify-center mx-auto text-[#2E7D32]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#221D1A]">
                    Inquiry Received, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#5C4D42] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Mohit has received your project details and will review them shortly.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF5EE] border border-[#E6D7C8] text-xs text-left text-[#4E4137] max-w-md mx-auto space-y-1 font-mono">
                    <div><strong>Service:</strong> {formData.service}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Timeline:</strong> {formData.timeline}</div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#2E7D32] hover:bg-[#256829] rounded-xl shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ping on WhatsApp Instantly</span>
                    </a>

                    <button
                      onClick={copyDetails}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#221D1A] bg-[#FAF5EE] hover:bg-white border border-[#D5C1AE] rounded-xl"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#2E7D32]" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#8C6246] hover:underline block w-full mt-2"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3C3026] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Mehta"
                        className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#FAF5EE] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#A08E80]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3C3026] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#FAF5EE] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#A08E80]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3C3026] mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#FAF5EE] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#A08E80]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3C3026] mb-1.5">
                        Primary Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#FAF5EE] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246]"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.categoryLabel})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3C3026] mb-1.5">
                        Expected Delivery Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#FAF5EE] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246]"
                      >
                        <option value="Urgent (Within 7 Days)">Urgent (Within 7 Days)</option>
                        <option value="Within 2-3 weeks">Standard (Within 2-3 Weeks)</option>
                        <option value="Flexible / 1+ Month">Flexible (1+ Month)</option>
                        <option value="Monthly Retainer">Monthly Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3C3026] mb-1.5">
                        Budget Range (USD / INR)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#FAF5EE] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246]"
                      >
                        <option value="Under $500 / ₹40,000">Under $500 / ₹40,000</option>
                        <option value="$500 - $1,500 / ₹40k - ₹1.2L">$500 - $1,500 / ₹40k - ₹1.2L</option>
                        <option value="$1,500 - $3,500 / ₹1.2L - ₹3L">$1,500 - $3,500 / ₹1.2L - ₹3L</option>
                        <option value="$3,500+ / ₹3L+">$3,500+ / ₹3L+</option>
                        <option value="To Be Discussed">To Be Discussed on Call</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3C3026] mb-1.5">
                      Project Details, Reference Links or Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe what you want to achieve, any existing links or specific features..."
                      className="w-full px-3.5 py-2.5 text-xs text-[#221D1A] bg-[#FAF5EE] border border-[#DFCAB4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#A08E80]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry to Mohit</span>
                    </button>

                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-[#221D1A] bg-[#FAF5EE] hover:bg-white border border-[#D5C1AE] rounded-xl transition-colors whitespace-nowrap"
                    >
                      <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                      <span>Send Direct via WhatsApp</span>
                    </a>
                  </div>

                  <div className="text-[11px] text-[#7A695C] text-center pt-1">
                    Guaranteed response within 12 hours · Non-disclosure guaranteed
                  </div>
                </form>
              )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
