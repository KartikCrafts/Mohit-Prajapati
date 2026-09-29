import React from 'react';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface CaseStudiesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="work" className="py-20 bg-[#FAF7F2] border-t border-[#E8DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-semibold text-[#8C6246] uppercase tracking-wider mb-2">
              Proven Business Impact
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221D1A] tracking-tight text-balance">
              Featured Case Studies & Quantified Results.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#574A40] leading-relaxed">
              Every software application, UI/UX system, or data dashboard is built with a direct commercial purpose: 
              reducing operational friction, accelerating revenue decisions, or positioning clients for top-tier opportunities.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Asymmetric List */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <ScrollReveal
                key={study.id}
                direction="up"
                delay={0.15}
                duration={0.65}
              >
                <div
                  className="rounded-3xl bg-[#EFE3D5] border border-[#DFCAB4] overflow-hidden p-6 sm:p-8 lg:p-10 transition-all hover:shadow-lg"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Visual Preview Slot with Fallback Container */}
                    <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#E2D2C0] border border-[#D5C1AE] shadow-inner group">
                        <img
                          src={study.image}
                          alt={study.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#221D1A]/70 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                          <span className="font-medium bg-[#221D1A]/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                            Client: {study.client}
                          </span>
                          <span className="font-mono text-[#E5D3BE]">
                            {study.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Narrative & Concrete Metrics */}
                    <div className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        {/* Unboxed category label */}
                        <div className="text-xs font-semibold text-[#8C6246] tracking-wider uppercase mb-1">
                          {study.category}
                        </div>
                        
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#221D1A] leading-snug">
                          {study.title}
                        </h3>

                        <p className="mt-3 text-sm text-[#54463C] leading-relaxed">
                          {study.summary}
                        </p>

                        {/* Quantified Metrics Adjacent to Claims (Mandatory Rule) */}
                        <div className="mt-6 grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#FAF5EE] border border-[#E4D5C5]">
                          {study.results.map((res, rIdx) => (
                            <div key={rIdx} className="text-center">
                              <div className="font-display text-lg sm:text-xl font-extrabold text-[#221D1A] tabular-nums">
                                {res.value}
                              </div>
                              <div className="text-[11px] text-[#786659] leading-tight mt-0.5">
                                {res.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom: Tags & Action */}
                      <div className="pt-4 border-t border-[#DFCAB4] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-[#6B5A4D]">
                          <span className="font-medium text-[#221D1A]">Stack:</span>
                          <span>{study.tags.join(' · ')}</span>
                        </div>

                        <button
                          onClick={() => onOpenBooking(study.title)}
                          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] rounded-lg transition-colors cursor-pointer"
                        >
                          <span>Build Similar Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

