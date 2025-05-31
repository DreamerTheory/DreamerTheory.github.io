
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, Star, Users, Mail, Github, Twitter } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedGames } from '@/components/FeaturedGames';
import { PhilosophySection } from '@/components/PhilosophySection';
import { ContactSection } from '@/components/ContactSection';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-cosmic-dark overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main>
        <HeroSection scrollY={scrollY} />
        <FeaturedGames />
        <PhilosophySection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
