import React from 'react';
import { Mail, Phone, MapPin, Check, Shield, Clock, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-[#FAF7F2] border-t border-[#E8DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Mohit Prajapati Profile & Logo Card (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="rounded-3xl bg-[#EFE3D5] border border-[#DFCAB4] p-7 sm:p-9 shadow-md space-y-6">
                
                <div className="flex items-center gap-4">
                  {/* Square Logo Container with object-contain */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#D9BEA7] bg-[#FAF5EE] p-1.5 shadow-sm shrink-0 flex items-center justify-center">
                    <img
                      src="https://cdn.corenexis.com/f/q5jlpZ52kah.jpeg"
                      alt="Mohit Prajapati Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#221D1A]">
                      Mohit Prajapati
                    </h3>
                    <p className="text-xs font-semibold text-[#8C6246] mt-0.5">
                      Lead Engineer & Solutions Consultant
                    </p>
                    <p className="text-xs text-[#6B5A4D] mt-0.5">
                      Mumbai, India · Available Globally (Remote)
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF5EE] border border-[#E4D5C5] space-y-2.5 text-xs text-[#4E4137]">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#8C6246] shrink-0" />
                    <span className="font-mono text-[#221D1A]">mohit.prajapati@techstudio.dev</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#8C6246] shrink-0" />
                    <span className="font-mono text-[#221D1A]">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#8C6246] shrink-0" />
                    <span>Remote Client Engagements Worldwide (IST / EST / GMT)</span>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="space-y-2 text-xs text-[#3E3229]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>Zero outsourcing — Mohit writes and reviews all work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>100% Full Intellectual Property & Source Handover</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>Guaranteed post-delivery bug fix warranty</span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Schedule Direct 1-on-1 Call
                </button>

              </div>
            </ScrollReveal>
          </div>

          {/* Right: Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left" delay={0.15}>
              <div className="text-xs font-semibold text-[#8C6246] uppercase tracking-wider">
                Philosophy & Engineering Standards
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221D1A] tracking-tight leading-tight text-balance mt-1">
                Building Software & Design That Actually Drives Revenue, Not Just Checkboxes.
              </h2>

              <div className="space-y-4 text-sm text-[#54463C] leading-relaxed mt-4">
                <p>
                  Too many agencies deliver bloated templates, slow codebases, and unmaintainable spreadsheets that leave clients stranded. 
                  My practice is built on the opposite principle: lean, modern engineering combined with refined visual taste and actionable data intelligence.
                </p>
                <p>
                  Whether you need a full-scale web application built with modern TypeScript and React, an automated business intelligence report in Power BI, 
                  an executive pitch deck, or an ATS-optimized resume that cuts through hiring algorithms — I treat every single deliverable as a high-stakes partnership.
                </p>
                <p>
                  You communicate directly with me. No account managers playing telephone, no missed deadlines, and no generic AI slop. Just clean, reliable execution.
                </p>
              </div>

              {/* Core Values Bento Grid */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#EFE3D5] border border-[#DFCAB4]">
                  <Shield className="w-5 h-5 text-[#8C6246] mb-2" />
                  <h4 className="text-xs font-bold text-[#221D1A]">Clean Architecture</h4>
                  <p className="text-[11px] text-[#635346] mt-1">Modular, well-commented, scalable codebases.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#EFE3D5] border border-[#DFCAB4]">
                  <Clock className="w-5 h-5 text-[#8C6246] mb-2" />
                  <h4 className="text-xs font-bold text-[#221D1A]">Punctual Delivery</h4>
                  <p className="text-[11px] text-[#635346] mt-1">99% on-time milestone delivery track record.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#EFE3D5] border border-[#DFCAB4]">
                  <HeartHandshake className="w-5 h-5 text-[#8C6246] mb-2" />
                  <h4 className="text-xs font-bold text-[#221D1A]">Transparent Rates</h4>
                  <p className="text-[11px] text-[#635346] mt-1">Clear milestone pricing without surprise fees.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
