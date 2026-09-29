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
              <div className="group rounded-3xl bg-[#EFE3D5] hover:bg-[#FAF4EC] border border-[#DFCAB4] hover:border-[#8C6246]/70 p-7 sm:p-9 shadow-md hover:shadow-2xl transition-all duration-500 space-y-6">
                
                <div className="flex items-center gap-4">
                  {/* Square Logo Container with object-contain */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#D9BEA7] group-hover:border-[#8C6246] bg-[#FAF5EE] p-1.5 shadow-sm shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <img
                      src="/images/mohit_avatar.jpg"
                      alt="Mohit Prajapati Logo"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-108"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('cdn.corenexis.com')) {
                          target.src = 'https://cdn.corenexis.com/f/q5jlpZ52kah.jpeg';
                        } else {
                          target.style.display = 'none';
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#221D1A] group-hover:text-[#8C6246] transition-colors">
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

                <div className="p-4 rounded-xl bg-[#FAF5EE] group-hover:bg-[#FFFDF9] border border-[#E4D5C5] group-hover:border-[#D5C0AB] space-y-2.5 text-xs text-[#4E4137] transition-all duration-300">
                  <div className="flex items-center gap-2.5 transition-transform duration-200 hover:translate-x-1">
                    <Mail className="w-4 h-4 text-[#8C6246] shrink-0" />
                    <span className="font-mono text-[#221D1A]">mohit.prajapati@techstudio.dev</span>
                  </div>
                  <div className="flex items-center gap-2.5 transition-transform duration-200 hover:translate-x-1">
                    <Phone className="w-4 h-4 text-[#8C6246] shrink-0" />
                    <span className="font-mono text-[#221D1A]">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2.5 transition-transform duration-200 hover:translate-x-1">
                    <MapPin className="w-4 h-4 text-[#8C6246] shrink-0" />
                    <span>Remote Client Engagements Worldwide (IST / EST / GMT)</span>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="space-y-2 text-xs text-[#3E3229]">
                  <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                    <Check className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>Zero outsourcing — Mohit writes and reviews all work</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                    <Check className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>100% Full Intellectual Property & Source Handover</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
                    <Check className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>Guaranteed post-delivery bug fix warranty</span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-4 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#8C6246] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
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
                <div className="group/bento p-4 rounded-xl bg-[#EFE3D5] hover:bg-[#FAF4EC] border border-[#DFCAB4] hover:border-[#8C6246]/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Shield className="w-5 h-5 text-[#8C6246] mb-2 transition-transform duration-300 group-hover/bento:scale-110 group-hover/bento:rotate-6" />
                  <h4 className="text-xs font-bold text-[#221D1A] group-hover/bento:text-[#8C6246] transition-colors">Clean Architecture</h4>
                  <p className="text-[11px] text-[#635346] mt-1">Modular, well-commented, scalable codebases.</p>
                </div>

                <div className="group/bento p-4 rounded-xl bg-[#EFE3D5] hover:bg-[#FAF4EC] border border-[#DFCAB4] hover:border-[#8C6246]/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Clock className="w-5 h-5 text-[#8C6246] mb-2 transition-transform duration-300 group-hover/bento:scale-110 group-hover/bento:rotate-6" />
                  <h4 className="text-xs font-bold text-[#221D1A] group-hover/bento:text-[#8C6246] transition-colors">Punctual Delivery</h4>
                  <p className="text-[11px] text-[#635346] mt-1">99% on-time milestone delivery track record.</p>
                </div>

                <div className="group/bento p-4 rounded-xl bg-[#EFE3D5] hover:bg-[#FAF4EC] border border-[#DFCAB4] hover:border-[#8C6246]/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <HeartHandshake className="w-5 h-5 text-[#8C6246] mb-2 transition-transform duration-300 group-hover/bento:scale-110 group-hover/bento:rotate-6" />
                  <h4 className="text-xs font-bold text-[#221D1A] group-hover/bento:text-[#8C6246] transition-colors">Transparent Rates</h4>
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
