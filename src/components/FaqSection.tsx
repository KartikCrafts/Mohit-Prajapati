import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Who owns the intellectual property and source code?',
    answer: 'You own 100% of the intellectual property, source code, Figma assets, and documentation upon final milestone payment. Everything is transferred to your GitHub organization or preferred cloud repository without proprietary locks.'
  },
  {
    question: 'How do project milestones and payments work?',
    answer: 'Standard engagements typically follow a transparent 40-30-30 or 50-50 structure: an initial deposit upon project kickoff, an interim milestone demo approval, and the balance upon final production deployment and QA verification.'
  },
  {
    question: 'What is your revision and post-delivery support policy?',
    answer: 'All projects include 2-3 formal revision rounds during active design and development sprints. Following launch, I provide 14 to 30 days of complimentary bug fix warranty to guarantee complete peace of mind.'
  },
  {
    question: 'Can you work with clients across different time zones?',
    answer: 'Yes! While I am based in Mumbai, India (IST), I regularly coordinate with clients across the US (EST/PST), Europe (GMT/CET), and Southeast Asia. We establish overlapping communication windows for standups and demos.'
  },
  {
    question: 'Can we sign a Non-Disclosure Agreement (NDA)?',
    answer: 'Absolutely. Prior to reviewing proprietary specifications, sensitive corporate datasets, or trade secrets, I am happy to execute a standard mutual or unilateral Non-Disclosure Agreement.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#E8DCCF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" delay={0.05}>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8C6246] uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221D1A] tracking-tight text-balance">
              Everything You Need to Know Before Kickoff.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 0.08}
              >
                <div
                  className="rounded-2xl bg-[#EFE3D5] border border-[#DFCAB4] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
                  >
                    <span className="font-display text-base font-bold text-[#221D1A]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#FAF5EE] border border-[#DFCAB4] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-[#8C6246]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#4E4137] leading-relaxed border-t border-[#DFCAB4]/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

