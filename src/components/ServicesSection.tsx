import React, { useState, useMemo, useRef } from 'react';
import { Search, ArrowRight, Clock, Layers, Check, X, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES, SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const ITEMS_PER_PAGE = 9;

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const gridTopRef = useRef<HTMLDivElement>(null);

  // Filtered services
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.subtitle.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.deliverables.some((d) => d.toLowerCase().includes(q)) ||
        service.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Total tabs / pages (e.g. 28 / 9 = 4 tabs)
  const totalPages = Math.max(1, Math.ceil(filteredServices.length / ITEMS_PER_PAGE));

  // Current slice of 9 services
  const currentServices = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredServices.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredServices, currentPage]);

  const goToPage = (page: number) => {
    const targetPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(targetPage);
    if (gridTopRef.current) {
      const yOffset = -90;
      const y = gridTopRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <section id="services" className="py-20 bg-[#FAF7F2] border-t border-[#E8DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold text-[#8C6246] tracking-wider uppercase mb-2">
                Comprehensive Service Offerings
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221D1A] tracking-tight text-balance">
                Specialized Solutions Designed for Tangible Business & Career Growth.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#574A40] leading-relaxed">
                Every deliverable is crafted personally with uncompromising standards for speed, security, and precision. 
                Select any capability to explore specific deliverables and technical stacks.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#6B5A4D] font-medium shrink-0">
              <span>28 Services Available</span>
              <span aria-hidden="true">·</span>
              <span>Direct Collaboration</span>
              <span aria-hidden="true">·</span>
              <span>Flexible Engagement</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Controls Bar (Interactive Segmented Buttons & Search Input) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="space-y-4 mb-10">
            
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              
              {/* Category Tabs */}
              <div className="w-full md:w-auto flex items-center gap-1.5 p-1.5 bg-[#EDE0D1] rounded-xl overflow-x-auto scrollbar-none border border-[#DFCBB5]">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#2A1F18] text-white shadow-xs font-semibold'
                          : 'text-[#4A3E34] hover:text-[#221D1A] hover:bg-[#E2D2C0]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Search Input Box */}
              <div className="w-full md:w-72 relative">
                <Search className="w-4 h-4 text-[#8C7A6D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Power BI, ATS, Mobile)..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-xs text-[#221D1A] bg-[#FAF5EE] border border-[#DFCBB5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C6246] placeholder:text-[#9A8778]"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearchChange('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8C7A6D] hover:text-[#221D1A] p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

            {/* Active filter count status & current slide range */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#7A695C]">
              <span>
                Showing <strong className="text-[#221D1A]">
                  {filteredServices.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredServices.length)}
                </strong> of <strong className="text-[#221D1A]">{filteredServices.length}</strong> total projects
                {activeCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === activeCategory)?.label}`}
                {searchQuery && ` matching "${searchQuery}"`}
                {' · '}
                <span className="font-medium text-[#8C6246]">Tab {currentPage} of {totalPages} (9 per slide)</span>
              </span>

              {(activeCategory !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    handleCategorySelect('all');
                    handleSearchChange('');
                  }}
                  className="text-[#8C6246] hover:underline font-medium cursor-pointer"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* 4 Tabs / Slide Navigation Bar (Requested by user) */}
            <div ref={gridTopRef} className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-[#EFE3D5] rounded-2xl border border-[#DFCAB4] shadow-xs">
              
              {/* Tab Buttons (Tab 1, Tab 2, Tab 3, Tab 4) */}
              <div className="w-full sm:w-auto flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <span className="text-[11px] font-semibold text-[#735F50] uppercase tracking-wider mr-1 shrink-0">
                  Select Tab:
                </span>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const startNum = (pageNum - 1) * ITEMS_PER_PAGE + 1;
                  const endNum = Math.min(pageNum * ITEMS_PER_PAGE, filteredServices.length);
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#2A1F18] text-white shadow-xs'
                          : 'bg-[#FAF5EE] text-[#52443A] hover:bg-white hover:text-[#221D1A] border border-[#DFCAB4]'
                      }`}
                    >
                      <span>Tab {pageNum}</span>
                      <span className={`text-[10px] font-mono ${isActive ? 'text-[#DEC1A6]' : 'text-[#8A786B]'}`}>
                        ({startNum}–{endNum})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Page Buttons */}
              <div className="w-full sm:w-auto flex items-center justify-end gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#221D1A] bg-[#FAF5EE] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed border border-[#DFCAB4] rounded-xl transition-all cursor-pointer shadow-2xs"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev Page</span>
                </button>

                <div className="text-xs font-mono text-[#6A584C] px-1 font-semibold">
                  {currentPage} / {totalPages}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer shadow-xs"
                  aria-label="Next page"
                >
                  <span>Next Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Services Cards Grid with Skin Color / Nude Div Surface Theme (Showing 9 projects per slide) */}
        {filteredServices.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-[#EFE3D5] border border-[#DFCAB4] p-8 max-w-lg mx-auto">
            <p className="text-sm font-semibold text-[#221D1A]">No matching services found</p>
            <p className="text-xs text-[#6B5A4D] mt-1 mb-4">
              Try adjusting your search query or select another category from above.
            </p>
            <button
              onClick={() => {
                handleCategorySelect('all');
                handleSearchChange('');
              }}
              className="px-4 py-2 text-xs font-medium text-white bg-[#2A1F18] rounded-lg"
            >
              Show All Services
            </button>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentServices.map((service, idx) => (
                <ScrollReveal
                  key={service.id}
                  direction="up"
                  delay={(idx % 3) * 0.08}
                  className="h-full flex flex-col"
                >
                  <div
                    className="h-full group relative flex flex-col justify-between rounded-2xl bg-[#EFE3D5] hover:bg-[#E9DAC8] border border-[#DFCAB4] hover:border-[#CDB299] p-6 transition-all duration-200 hover:shadow-md"
                  >
                    <div>
                      
                      {/* Unboxed clean metadata (Zero-Pill discipline) */}
                      <div className="flex items-center justify-between text-xs text-[#6B5A4D] mb-3">
                        <span className="font-medium text-[#8C6246]">
                          {service.categoryLabel}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px] text-[#786659]">
                          <Clock className="w-3 h-3 text-[#99816F]" />
                          {service.turnaroundTime}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-display text-xl font-bold text-[#221D1A] group-hover:text-[#171311] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Concise subtitle / description */}
                      <p className="mt-2 text-xs sm:text-sm text-[#54463C] leading-relaxed line-clamp-2">
                        {service.subtitle}
                      </p>

                      {/* Primary Key Deliverables Snapshot */}
                      <div className="mt-4 pt-4 border-t border-[#DFCAB4]/70 space-y-2">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#735F50]">
                          Key Deliverables Included:
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#3E332B]">
                          {service.deliverables.slice(0, 3).map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Card Bottom: Tech Stack & Action Links */}
                    <div className="mt-6 pt-4 border-t border-[#DFCAB4] flex items-center justify-between gap-3">
                      
                      {/* Subtle unboxed tech items */}
                      <div className="flex items-center gap-1.5 text-[11px] text-[#69574A] truncate max-w-[55%]">
                        <span className="truncate">{service.techStack.slice(0, 3).join(' · ')}</span>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedServiceModal(service)}
                          className="px-2.5 py-1.5 text-xs font-medium text-[#221D1A] hover:bg-[#DFCAB4]/60 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                          title="View complete specifications"
                        >
                          Details
                        </button>

                        <button
                          onClick={() => onSelectService(service.title)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                        >
                          <span>Inquire</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom Pagination & Next Page Bar for smooth navigation after reading */}
            {totalPages > 1 && (
              <div className="mt-10 p-4 rounded-2xl bg-[#EFE3D5] border border-[#DFCAB4] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#6A584C]">
                  Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> — Showing 9 projects per tab ({filteredServices.length} total)
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#221D1A] bg-[#FAF5EE] hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed border border-[#DFCAB4] rounded-xl transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous 9 Projects</span>
                  </button>

                  <div className="hidden sm:flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => goToPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          currentPage === pageNum
                            ? 'bg-[#2A1F18] text-white'
                            : 'bg-[#FAF5EE] text-[#52443A] hover:bg-white border border-[#DFCAB4]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer shadow-xs"
                  >
                    <span>Next 9 Projects</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Detailed Service Inspection Modal */}
      {selectedServiceModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#221D1A]/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedServiceModal(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#FAF5EE] border border-[#D5C1AE] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E6D7C8]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#8C6246] font-semibold uppercase tracking-wider">
                  <span>{selectedServiceModal.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[#6A5A4D]">{selectedServiceModal.turnaroundTime}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#221D1A] mt-1">
                  {selectedServiceModal.title}
                </h3>
                <p className="text-sm text-[#5C4D42] mt-1">
                  {selectedServiceModal.subtitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedServiceModal(null)}
                className="p-1.5 rounded-lg text-[#6B5A4D] hover:text-[#221D1A] hover:bg-[#EBE0D3] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-6">
              
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#735F50] mb-2">
                  Scope Overview & Delivery Approach
                </h4>
                <p className="text-sm text-[#3E332B] leading-relaxed">
                  {selectedServiceModal.description}
                </p>
              </div>

              {/* Comprehensive Deliverables List */}
              <div className="rounded-xl bg-[#EFE3D5] p-5 border border-[#DFCAB4]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#735F50] mb-3">
                  Full Deliverables Checklist:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C231D]">
                  {selectedServiceModal.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Tools Used */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#735F50] mb-2">
                  Technologies, Frameworks & Tooling:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedServiceModal.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-[#2A1F18] bg-[#EAE0D3] border border-[#D8C5B2] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#E6D7C8] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#6B5A4D]">
                <span>Timeline: <strong className="text-[#221D1A]">{selectedServiceModal.turnaroundTime}</strong></span>
                <span className="mx-2">·</span>
                <span>Includes source files & revisions</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-4 py-2 text-xs font-medium text-[#54463C] hover:text-[#221D1A] rounded-lg"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    onSelectService(title);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#2A1F18] hover:bg-[#3D2E24] rounded-lg shadow-sm"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
