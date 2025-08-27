import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import WhyRatooSection from '@/components/sections/WhyRatooSection';
import FeaturesShowcase from '@/components/sections/FeaturesShowcase';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AppDownloadSection from '@/components/sections/AppDownloadSection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyRatooSection />
      <FeaturesShowcase />
      <TestimonialsSection />
      <AppDownloadSection />
      <Footer />
    </main>
  );
}
