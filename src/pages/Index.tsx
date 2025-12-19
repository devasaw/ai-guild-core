import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PersonasSection from '@/components/PersonasSection';
import BenefitsSection from '@/components/BenefitsSection';
import CommunitySection from '@/components/CommunitySection';
import JoinSection from '@/components/JoinSection';
import PartnersSection from '@/components/PartnersSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-background noise-overlay">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PersonasSection />
        <BenefitsSection />
        <CommunitySection />
        <JoinSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
