import React, { useState } from 'react';
import { MessageSquare, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6EFEB]/90 backdrop-blur-md border-b border-[#E4D6C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark with square logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246] rounded-xl p-1"
          aria-label="SKILLORA Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-[#D9BEA7] bg-[#FAF5EE] p-0.5 sm:p-1 shrink-0 shadow-2xs flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#8C6246]">
            <img 
              src="https://cdn.corenexis.com/f/q5jlpZ52kah.jpeg" 
              alt="SKILLORA Logo" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<span class="font-bold text-[#3E2D22] text-xs">SK</span>';
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-extrabold tracking-tight text-[#221D1A]">
              SKILLORA
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#736357] font-medium tracking-wide -mt-0.5">
              By Mohit Prajapati
            </span>
          </div>
        </a>

        {/* Zone 2: Spacious text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 mx-4 xl:mx-8 text-sm font-medium text-[#574A40] tracking-wide">
          <a 
            href="#services" 
            className="px-2 py-1 hover:text-[#221D1A] hover:bg-[#EAE0D3]/50 rounded-md transition-all duration-200"
          >
            Service
          </a>
          <a 
            href="#estimator" 
            className="px-2 py-1 hover:text-[#221D1A] hover:bg-[#EAE0D3]/50 rounded-md transition-all duration-200"
          >
            Scope
          </a>
          <a 
            href="#work" 
            className="px-2 py-1 hover:text-[#221D1A] hover:bg-[#EAE0D3]/50 rounded-md transition-all duration-200"
          >
            Projects
          </a>
          <a 
            href="#process" 
            className="px-2 py-1 hover:text-[#221D1A] hover:bg-[#EAE0D3]/50 rounded-md transition-all duration-200"
          >
            Delivery
          </a>
          <a 
            href="#about" 
            className="px-2 py-1 hover:text-[#221D1A] hover:bg-[#EAE0D3]/50 rounded-md transition-all duration-200"
          >
            About
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://wa.me/919876543210?text=Hi%20Mohit,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#3C3026] bg-[#EAE0D3] hover:bg-[#E2D4C3] border border-[#D8C5B2] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
            aria-label="Direct WhatsApp Message"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] rounded-lg transition-all shadow-xs hover:shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1F18] cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="px-2.5 py-1 text-xs font-semibold text-white bg-[#2A1F18] rounded-md"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#221D1A] hover:bg-[#EAE0D3] rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E4D6C7] bg-[#F6EFEB] px-4 pt-2 pb-5 space-y-2">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#221D1A] hover:bg-[#EDE1D2] rounded-md"
          >
            Service
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#221D1A] hover:bg-[#EDE1D2] rounded-md"
          >
            Scope
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#221D1A] hover:bg-[#EDE1D2] rounded-md"
          >
            Projects
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#221D1A] hover:bg-[#EDE1D2] rounded-md"
          >
            Delivery
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#221D1A] hover:bg-[#EDE1D2] rounded-md"
          >
            About
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/919876543210?text=Hi%20Mohit,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold text-[#221D1A] bg-[#EAE0D3] border border-[#D8C5B2] rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
              <span>Chat on WhatsApp (+91 98765 43210)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2 text-xs font-semibold text-white bg-[#2A1F18] rounded-lg text-center"
            >
              Get Free Consultation & Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
