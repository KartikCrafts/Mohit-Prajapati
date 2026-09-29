import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, Zap, BadgeCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-18 md:pb-28">
      {/* Subtle organic light background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EBD8C3]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E3CEB9]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Direct human status indicator - no capsule pill, clean unboxed text */}
            <ScrollReveal direction="down" delay={0.05}>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#665447]">
                <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
                <span>Available for New Client Projects & Retainers</span>
                <span aria-hidden="true" className="text-[#A39081]">·</span>
                <span>Q1-Q2 2026 Bookings Open</span>
              </div>
            </ScrollReveal>

            {/* Display Headline */}
            <ScrollReveal direction="up" delay={0.15}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#221D1A] leading-[1.12] text-balance">
                Bespoke Software, Distinctive UI/UX & High-Impact Data Analytics.
              </h1>
            </ScrollReveal>

            {/* Subheading / Concrete value narrative */}
            <ScrollReveal direction="up" delay={0.25}>
              <p className="text-base sm:text-lg text-[#52453B] leading-relaxed max-w-2xl">
                Hello, I am <span className="font-semibold text-[#221D1A]">Mohit Prajapati</span>. 
                I partner with founders, growing businesses, and professionals to build custom web applications, 
                automated business intelligence dashboards, brand identity systems, and standout career portfolios. 
                From initial architecture to production launch, you get rapid execution without corporate agency bloat.
              </p>
            </ScrollReveal>

            {/* Primary Action Buttons */}
            <ScrollReveal direction="up" delay={0.35}>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenBooking}
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] rounded-xl transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1F18] whitespace-nowrap cursor-pointer"
                >
                  <span>Book a Discovery Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#services"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#2A1F18] bg-[#EDE0D1] hover:bg-[#E5D4C2] border border-[#D5C1AE] rounded-xl transition-colors whitespace-nowrap"
                >
                  <span>Explore 28+ Services</span>
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Mohit,%20I%20am%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-[#2E7D32] hover:text-[#1B5E20] hover:bg-[#E8DCCF]/50 rounded-xl transition-colors whitespace-nowrap"
                  aria-label="Direct WhatsApp Message"
                >
                  <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                  <span className="underline underline-offset-4 decoration-[#2E7D32]/40">Chat on WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Trust points / Guarantees */}
            <ScrollReveal direction="up" delay={0.45}>
              <div className="pt-4 border-t border-[#E5D7C9] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#574A40]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6246] shrink-0" />
                  <span>100% Clean Code & Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8C6246] shrink-0" />
                  <span>On-Time Milestone Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#8C6246] shrink-0" />
                  <span>Direct Access to Mohit</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Hero Visual Carrier with Skin-Toned Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.25} duration={0.65}>
              {/* Skin-tone card container */}
              <div className="relative rounded-2xl bg-[#EFE3D5] p-3 border border-[#DFCAB4] shadow-xl">
                
                <div className="relative aspect-4/3 sm:aspect-16/10 rounded-xl overflow-hidden bg-[#E2D2C0]">
                  <img
                    src="/src/assets/images/hero_workspace_consulting_1790611829034.jpg"
                    alt="Mohit Prajapati Engineering & Design Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Measured contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221D1A]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid caption inside the image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-[#E5D3BE] font-semibold">
                      Studio Workflow & Delivery
                    </p>
                    <p className="text-sm font-medium text-white/95 mt-0.5">
                      Engineering production-ready systems tailored to business ROI
                    </p>
                  </div>
                </div>

                {/* Stat card embedded inside skin container */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center p-3 rounded-lg bg-[#FAF5EE] border border-[#E6D7C8]">
                  <div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-[#221D1A] tabular-nums">
                      85+
                    </div>
                    <div className="text-[11px] text-[#6E5E52] font-medium leading-tight mt-0.5">
                      Projects Delivered
                    </div>
                  </div>

                  <div className="border-x border-[#EADCCF]">
                    <div className="font-display text-xl sm:text-2xl font-bold text-[#221D1A] tabular-nums">
                      99%
                    </div>
                    <div className="text-[11px] text-[#6E5E52] font-medium leading-tight mt-0.5">
                      On-Time Milestone
                    </div>
                  </div>

                  <div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-[#221D1A] tabular-nums">
                      4.9 / 5
                    </div>
                    <div className="text-[11px] text-[#6E5E52] font-medium leading-tight mt-0.5">
                      Client Satisfaction
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating verification badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#FAF5EE] border border-[#DFCAB4] rounded-xl px-4 py-2.5 shadow-lg items-center gap-3 max-w-xs">
                <div className="w-8 h-8 rounded-full bg-[#E5D3BE] flex items-center justify-center shrink-0 text-[#221D1A]">
                  <BadgeCheck className="w-4 h-4 text-[#8C6246]" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-[#221D1A]">Verified Service Specialist</p>
                  <p className="text-[#6B5C50] text-[11px]">Software · Design · Data · Career</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
