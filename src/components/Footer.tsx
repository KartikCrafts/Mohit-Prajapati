import React from 'react';
import { ArrowUp, Mail, Phone, MessageSquare } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241B15] text-[#EFE3D5] border-t border-[#3B2C23] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3B2C23]">
            
            {/* Brand Info (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                {/* Square Logo container with object-contain */}
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#5A4537] bg-[#3B2C23] p-1 shrink-0 flex items-center justify-center">
                  <img
                    src="https://cdn.corenexis.com/f/q5jlpZ52kah.jpeg"
                    alt="Mohit Prajapati Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-display text-lg font-extrabold text-white tracking-tight block">
                    SKILLORA
                  </span>
                  <span className="text-xs text-[#B5A394]">
                    By Mohit Prajapati · Software, Design & Data
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#A89687] leading-relaxed max-w-sm">
                Helping forward-thinking businesses and ambitious professionals build modern software, 
                aesthetic interfaces, automated data dashboards, and high-impact career assets.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://wa.me/919876543210?text=Hi%20Mohit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#3B2C23] hover:bg-[#4E3A2F] flex items-center justify-center text-[#2E7D32] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="mailto:mohit.prajapati@techstudio.dev"
                  className="w-8 h-8 rounded-lg bg-[#3B2C23] hover:bg-[#4E3A2F] flex items-center justify-center text-[#EFE3D5] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919876543210"
                  className="w-8 h-8 rounded-lg bg-[#3B2C23] hover:bg-[#4E3A2F] flex items-center justify-center text-[#EFE3D5] transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Core Services Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4BFA9]">
                Core Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-[#A89687]">
                <li><a href="#services" className="hover:text-white transition-colors">Web & Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">UI/UX & Website Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Power BI & Excel Dashboards</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Data Analysis & SQL Pipelines</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">ATS Resume & Portfolio Sites</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">MVP Prototyping & DevOps</a></li>
              </ul>
            </div>

            {/* Quick Links & Contact Details (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4BFA9]">
                Contact Coordinates
              </h4>
              <div className="space-y-2 text-xs text-[#A89687]">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B5A394]" />
                  <a href="mailto:mohit.prajapati@techstudio.dev" className="hover:text-white transition-colors font-mono">
                    mohit.prajapati@techstudio.dev
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B5A394]" />
                  <a href="tel:+919876543210" className="hover:text-white transition-colors font-mono">
                    +91 98765 43210
                  </a>
                </p>
                <p className="text-[11px] text-[#8C7A6D] pt-1">
                  Owner: Mohit Prajapati · Mumbai, India · Remote Global
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6D]">
          <div>
            © {new Date().getFullYear()} Mohit Prajapati. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-[#EFE3D5] transition-colors">Catalog</a>
            <a href="#estimator" className="hover:text-[#EFE3D5] transition-colors">Estimator</a>
            <a href="#contact" className="hover:text-[#EFE3D5] transition-colors">Inquiries</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#D4BFA9] hover:text-white transition-colors p-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
