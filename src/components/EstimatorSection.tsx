import React, { useState, useMemo } from 'react';
import { Calculator, MessageSquare, ArrowRight, Check, Layers } from 'lucide-react';

interface EstimatorSectionProps {
  onOpenBookingWithScope: (scopeDetails: string) => void;
}

interface EstimatorModule {
  id: string;
  name: string;
  category: 'software' | 'design' | 'data' | 'career';
  baseDays: number;
  description: string;
}

const MODULES: EstimatorModule[] = [
  // Software
  { id: 'web_dev', name: 'Custom Website / Landing Page', category: 'software', baseDays: 7, description: 'Responsive, fast-loading modern site' },
  { id: 'web_app', name: 'Full-Stack Web Application (SaaS)', category: 'software', baseDays: 18, description: 'Auth, database, backend logic & API' },
  { id: 'mobile_app', name: 'Mobile App (iOS & Android)', category: 'software', baseDays: 24, description: 'Cross-platform native mobile experience' },
  { id: 'api_db', name: 'API & Database Architecture', category: 'software', baseDays: 6, description: 'REST/GraphQL, PostgreSQL, authentication' },
  { id: 'ai_integ', name: 'AI / LLM Integration', category: 'software', baseDays: 10, description: 'Smart assistant, embeddings, automation' },

  // Design
  { id: 'uiux_proto', name: 'Complete UI/UX & Clickable Prototype', category: 'design', baseDays: 9, description: 'User journeys, Figma wireframes & UI kits' },
  { id: 'brand_logo', name: 'Logo & Visual Brand Identity', category: 'design', baseDays: 5, description: 'Vector logos, color system, typography pack' },
  { id: 'pitch_deck', name: 'Pitch Deck / Executive PPT Slides', category: 'design', baseDays: 4, description: '15-20 custom slides for investors or sales' },
  { id: 'social_kit', name: 'Social Media Design Templates', category: 'design', baseDays: 3, description: 'Carousel decks, story banners, post templates' },

  // Data & Analytics
  { id: 'powerbi_dash', name: 'Power BI Executive Dashboard', category: 'data', baseDays: 7, description: 'DAX modeling, automated refresh & KPI cards' },
  { id: 'excel_model', name: 'Advanced Excel Model & Automation', category: 'data', baseDays: 4, description: 'Formulas, Power Query, automated reporting' },
  { id: 'data_clean_sql', name: 'Data Cleaning & SQL Pipeline', category: 'data', baseDays: 5, description: 'ETL, deduplication, structured queries' },
  { id: 'python_script', name: 'Python Automation & Web Scraping', category: 'data', baseDays: 4, description: 'Custom scraping, file parsing & bots' },

  // Career
  { id: 'ats_resume', name: 'ATS-Optimized Resume Rewrite', category: 'career', baseDays: 3, description: '90%+ ATS score, metrics-driven bullets' },
  { id: 'linkedin_revamp', name: 'LinkedIn Executive Optimization', category: 'career', baseDays: 2, description: 'Keyword SEO, headline, summary & banner' },
  { id: 'portfolio_site', name: 'Personal Portfolio Website', category: 'career', baseDays: 5, description: 'Live personal showcase with project demos' },
  { id: 'mock_interview', name: 'Mock Interview & STAR Coaching', category: 'career', baseDays: 2, description: '1-on-1 behavioral & technical coaching' },
];

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({ onOpenBookingWithScope }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'software' | 'design' | 'data' | 'career'>('all');
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>(['web_dev', 'uiux_proto']);
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');

  const toggleModule = (id: string) => {
    setSelectedModuleIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const visibleModules = useMemo(() => {
    if (selectedCategory === 'all') return MODULES;
    return MODULES.filter((m) => m.category === selectedCategory);
  }, [selectedCategory]);

  const selectedModules = useMemo(() => {
    return MODULES.filter((m) => selectedModuleIds.includes(m.id));
  }, [selectedModuleIds]);

  // Estimated calculation
  const totalDays = useMemo(() => {
    if (selectedModules.length === 0) return 0;
    const rawSum = selectedModules.reduce((acc, curr) => acc + curr.baseDays, 0);
    // Parallel concurrency discount factor (working concurrently on modules)
    const factor = selectedModules.length > 1 ? 0.72 : 1.0;
    const netDays = Math.ceil(rawSum * factor);
    return urgency === 'express' ? Math.max(3, Math.ceil(netDays * 0.65)) : netDays;
  }, [selectedModules, urgency]);

  const scopeSummaryText = useMemo(() => {
    const names = selectedModules.map((m) => m.name).join(', ');
    return `Selected Services: ${names || 'None'}. Urgency: ${urgency.toUpperCase()}. Estimated Timeline: ${totalDays} business days.`;
  }, [selectedModules, urgency, totalDays]);

  const whatsappMessage = encodeURIComponent(
    `Hi Mohit, I used your website project estimator:\n\n${scopeSummaryText}\n\nCan we discuss the budget and kickoff?`
  );

  return (
    <section id="estimator" className="py-20 bg-[#F6EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - stable anchored position */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8C6246] uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Calculator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221D1A] tracking-tight text-balance">
            Estimate Your Project Scope & Delivery Timeline.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#574A40] leading-relaxed">
            Select the components your project requires to see an estimated turnaround schedule. 
            No vague quotes or hidden delays — get instant clarity right now.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Module Selector (7 cols) - solid fixed position, no jitter */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#EAE0D3] rounded-xl border border-[#DFCBB5] overflow-x-auto mb-6">
              {[
                { id: 'all', label: 'All Disciplines' },
                { id: 'software', label: 'Software' },
                { id: 'design', label: 'Design' },
                { id: 'data', label: 'Data & Analytics' },
                { id: 'career', label: 'Career Services' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#2A1F18] text-white shadow-xs font-semibold'
                      : 'text-[#504136] hover:text-[#221D1A] hover:bg-[#DFCBB5]/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Selectable Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {visibleModules.map((mod) => {
                const isSelected = selectedModuleIds.includes(mod.id);
                return (
                  <div
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`group/mod h-full p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg ${
                      isSelected
                        ? 'bg-[#EBDBC9] border-[#8C6246] shadow-sm ring-1 ring-[#8C6246]/40'
                        : 'bg-[#FAF5EE] hover:bg-[#FFFDF9] border-[#DFCAB4] hover:border-[#8C6246]/60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-[#221D1A] group-hover/mod:text-[#8C6246] transition-colors leading-snug">
                          {mod.name}
                        </h4>
                        <p className="text-xs text-[#615144] mt-1 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all duration-200 group-hover/mod:scale-110 ${
                          isSelected
                            ? 'bg-[#2A1F18] border-[#2A1F18] text-white'
                            : 'border-[#CBB5A0] bg-white group-hover/mod:border-[#8C6246]'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#DFCAB4]/60 flex items-center justify-between text-[11px] text-[#786659]">
                      <span className="capitalize">{mod.category}</span>
                      <span className="font-mono">~{mod.baseDays} Days benchmark</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Urgency Selector */}
            <div className="p-4 rounded-xl bg-[#EFE3D5] border border-[#DFCAB4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#221D1A] block">
                  Delivery Speed & Urgency
                </span>
                <span className="text-xs text-[#615144]">
                  Standard timeline or prioritized fast-track sprint
                </span>
              </div>

              <div className="flex items-center gap-2 p-1 bg-[#FAF5EE] rounded-lg border border-[#DFCAB4]">
                <button
                  onClick={() => setUrgency('standard')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    urgency === 'standard'
                      ? 'bg-[#2A1F18] text-white shadow-xs'
                      : 'text-[#615144] hover:text-[#221D1A]'
                  }`}
                >
                  Standard Track
                </button>
                <button
                  onClick={() => setUrgency('express')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    urgency === 'express'
                      ? 'bg-[#8C6246] text-white shadow-xs'
                      : 'text-[#615144] hover:text-[#221D1A]'
                  }`}
                >
                  Fast-Track Express
                </button>
              </div>
            </div>

          </div>

          {/* Right: Live Scope Summary Card (5 cols) - Smooth fixed/sticky anchor without transform jumps */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-[#EFE3D5] hover:bg-[#FAF4EC] border border-[#DFCAB4] hover:border-[#8C6246]/60 p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#DFCAB4]">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#221D1A]">
                      Project Blueprint Summary
                    </h3>
                    <p className="text-xs text-[#69584B]">
                      Instant estimate based on selected deliverables
                    </p>
                  </div>
                  <Layers className="w-5 h-5 text-[#8C6246] transition-transform duration-300 hover:rotate-12" />
                </div>

                {/* Selected List */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#735F50] mb-2">
                    Selected Modules ({selectedModules.length}):
                  </div>
                  {selectedModules.length === 0 ? (
                    <p className="text-xs text-[#8C7A6D] italic">
                      No deliverables selected. Click any module on the left.
                    </p>
                  ) : (
                    <ul className="space-y-2 text-xs text-[#2A1F18] max-h-48 overflow-y-auto pr-1">
                      {selectedModules.map((m) => (
                        <li key={m.id} className="flex items-center justify-between bg-[#FAF5EE] hover:bg-[#FFFDF9] hover:border-[#8C6246]/50 hover:translate-x-0.5 px-3 py-2 rounded-lg border border-[#E4D5C5] transition-all duration-200">
                          <span className="font-medium truncate max-w-[70%]">{m.name}</span>
                          <span className="font-mono text-[#786659]">~{m.baseDays}d</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Estimated Timeline Display */}
                <div className="p-4 rounded-xl bg-[#FAF5EE] hover:bg-[#FFFDF9] border border-[#DFCAB4] hover:border-[#8C6246]/50 text-center transition-all duration-300 hover:shadow-md">
                  <div className="text-xs font-medium text-[#6B5A4D]">
                    Estimated Delivery Timeline
                  </div>
                  <div className="font-display text-3xl font-extrabold text-[#221D1A] my-1 tabular-nums transition-transform duration-300 hover:scale-105">
                    {totalDays === 0 ? '—' : `${totalDays} Business Days`}
                  </div>
                  <div className="text-[11px] text-[#7A695C]">
                    {urgency === 'express' ? '⚡ Expedited priority schedule' : '✓ Includes QA testing & revisions buffer'}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    disabled={selectedModules.length === 0}
                    onClick={() => onOpenBookingWithScope(scopeSummaryText)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] disabled:bg-[#B3A090] rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span>Lock In Quote & Schedule Kickoff</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>

                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#221D1A] bg-[#FAF5EE] hover:bg-white border border-[#D5C1AE] hover:border-[#8C6246]/60 hover:shadow-xs rounded-xl transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                    <span>Send Estimate to Mohit on WhatsApp</span>
                  </a>
                </div>

                <div className="text-[11px] text-[#7A695C] text-center pt-2">
                  No commitment required · Transparent milestones · 100% source code ownership
                </div>

              </div>
          </div>

        </div>

      </div>
    </section>
  );
};
