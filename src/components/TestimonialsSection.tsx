import React from 'react';
import { TESTIMONIALS } from '../data/caseStudiesData';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F6EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" delay={0.05}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-semibold text-[#8C6246] uppercase tracking-wider mb-2">
              Client Endorsements
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221D1A] tracking-tight text-balance">
              Real Words from Founders, Leaders & Professionals.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#574A40] leading-relaxed">
              Direct feedback from client collaborations across software development, data analytics, and career positioning.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal
              key={t.id}
              direction="up"
              delay={idx * 0.12}
              className="h-full"
            >
              <div
                className="group h-full rounded-2xl bg-[#EFE3D5] hover:bg-[#FAF4EC] border border-[#DFCAB4] hover:border-[#8C6246]/70 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#E58A1F] transition-transform duration-300 group-hover:scale-105">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#8C6246]/40 group-hover:text-[#8C6246] transition-all duration-300 group-hover:scale-110" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#3E3229] leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DFCAB4] group-hover:border-[#D5C0AB] transition-colors">
                  <div className="text-sm font-bold text-[#221D1A] group-hover:text-[#8C6246] transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#6B5A4D]">
                    {t.role} · {t.company}
                  </div>
                  <div className="text-[11px] text-[#8C6246] font-medium mt-1">
                    Service: {t.serviceUsed}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

