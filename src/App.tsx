import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { EstimatorSection } from './components/EstimatorSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [scopeNotes, setScopeNotes] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setScopeNotes(undefined);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithScope = (scopeDetails: string) => {
    setSelectedService('Custom Software');
    setScopeNotes(scopeDetails);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
    setScopeNotes(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F6EFEB] text-[#221D1A] flex flex-col selection:bg-[#DFCAB4] selection:text-[#221D1A]">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Comprehensive Services Catalog (All 28 services from requirements) */}
        <ServicesSection onSelectService={(serviceName) => handleOpenBooking(serviceName)} />

        {/* Interactive Scope & Turnaround Estimator */}
        <EstimatorSection onOpenBookingWithScope={handleOpenBookingWithScope} />

        {/* Featured Case Studies with Quantifiable Outcomes */}
        <CaseStudiesSection onOpenBooking={(serviceName) => handleOpenBooking(serviceName)} />

        {/* 4-Step Transparent Delivery Process */}
        <ProcessSection />

        {/* About Mohit Prajapati & Engineering Guarantees */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Testimonials & Endorsements */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Direct Inquiry Section */}
        <ContactSection />
      </main>

      {/* Quiet Professional Footer */}
      <Footer />

      {/* Universal Priority Booking & Quote Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedService={selectedService}
        scopeNotes={scopeNotes}
      />
    </div>
  );
}
