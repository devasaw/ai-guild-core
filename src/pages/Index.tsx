import { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import CompanyLogosSection from '@/components/CompanyLogosSection';
import EventsSection from '@/components/EventsSection';
import LearnSection from '@/components/LearnSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useSmoothScroll();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Main content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-[180px]' : 'md:ml-[60px]'} ml-0`}>
        <HeroSection />
        <CompanyLogosSection />
        <EventsSection />
        <LearnSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
