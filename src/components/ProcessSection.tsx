import React from 'react';
import { Compass, Layout, Code2, Rocket, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Requirement Brief',
      subtitle: 'Clear goals, defined boundaries & fixed deliverables.',
      description: 'We review your needs in detail, clarify edge cases, evaluate technical feasibility, and map out fixed deliverables before writing a single line of code or designing a frame.',
      icon: Compass,
      highlights: ['Scope audit & roadmap', 'Technology stack selection', 'Fixed timeline agreement']
    },
    {
      step: '02',
      title: 'Architecture & Visual Blueprint',
      subtitle: 'Interactive prototypes and clean system diagrams.',
      description: 'You receive clickable Figma prototypes for design projects, or database schema & API contracts for development. We iterate until the architecture is crystal-clear.',
      icon: Layout,
      highlights: ['Interactive Figma mockups', 'Database schemas & ERDs', 'No ambiguity or surprises']
    },
    {
      step: '03',
      title: 'Agile Engineering & Milestone Demos',
      subtitle: 'Progress you can touch and test every week.',
      description: 'We build in iterative milestones. You receive staging preview links to interact with your application or dashboard in real-time with continuous feedback loops.',
      icon: Code2,
      highlights: ['Clean, modular TypeScript', 'Staging server previews', 'Async WhatsApp/Email updates']
    },
    {
      step: '04',
      title: 'Deployment & Complete Handover',
      subtitle: 'Production launch, source code & 1-on-1 walkthrough.',
      description: 'We configure your cloud infrastructure, run comprehensive QA tests, and hand over 100% of the intellectual property, source files, and a recorded system walkthrough.',
      icon: Rocket,
      highlights: ['Zero-downtime production push', '100% IP & source transfer', 'Post-launch warranty support']
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#F6EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-semibold text-[#8C6246] uppercase tracking-wider mb-2">
              Execution Methodology
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221D1A] tracking-tight text-balance">
              A Transparent 4-Step Process Built for Velocity & Quality.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#574A40] leading-relaxed">
              Eliminating agency bureaucracy. You work directly with Mohit Prajapati from kickoff call to final delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 0.1}
                className="h-full"
              >
                <div
                  className="group h-full relative rounded-2xl bg-[#EFE3D5] hover:bg-[#FAF4EC] border border-[#DFCAB4] hover:border-[#8C6246]/70 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    
                    {/* Step Index & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-2xl font-extrabold text-[#8C6246] tabular-nums transition-transform duration-300 group-hover:scale-110 inline-block">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] group-hover:bg-[#EBD8C3] border border-[#DFCAB4] group-hover:border-[#8C6246] flex items-center justify-center text-[#2A1F18] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="w-5 h-5 text-[#8C6246] transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#221D1A] group-hover:text-[#8C6246] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs font-medium text-[#7A695C] mt-1 mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-[#4E4137] leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                  {/* Highlights */}
                  <div className="mt-6 pt-4 border-t border-[#DFCAB4] space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[11px] text-[#42362E]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
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

