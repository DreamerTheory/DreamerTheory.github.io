
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const scrollToGames = () => {
    const element = document.getElementById('games');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-devil-red to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-devil-gold to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-devil-orange to-transparent rounded-full blur-2xl animate-bounce-subtle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
        <div className="animate-fadeInUp mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl overflow-hidden devil-shadow animate-wiggle">
            <img 
              src={`${import.meta.env.BASE_URL}lovable-uploads/231f49f5-e747-47e2-a87f-b3c03c0b414f.png`} 
              alt="DreamerTheory Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-orbitron font-black mb-4 sm:mb-6 glow-text">
            <span className="bg-gradient-to-r from-white via-devil-gold to-devil-orange bg-clip-text text-transparent">
              DreamerTheory
            </span>
          </h1>
        </div>
        
        <div className="animate-fadeInUp-delay-1">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white mb-3 sm:mb-4 font-bold px-2">
            We build worlds worth dreaming about 😈
          </p>
        </div>
        
        <div className="animate-fadeInUp-delay-2">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Crafting mischievously fun, story-rich indie games that transport players 
            to extraordinary realms where every choice matters and every adventure is unforgettable.
          </p>
        </div>
        
        <div className="animate-fadeInUp-delay-3 space-y-4 sm:space-y-6">
          <Button 
            onClick={scrollToGames}
            size="lg"
            className="mischief-button text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold rounded-full devil-shadow hover:scale-110 transition-all duration-300"
          >
            See Our Worlds 🎮
          </Button>
          
          <div className="mt-8 sm:mt-16">
            <button 
              onClick={scrollToGames}
              className="text-white hover:text-devil-gold transition-colors animate-bounce-subtle"
            >
              <ArrowDown size={24} className="sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements - hidden on very small screens */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 text-xl sm:text-2xl animate-bounce-subtle opacity-60">👹</div>
      <div className="hidden sm:block absolute top-1/3 right-1/3 text-lg sm:text-xl animate-wiggle opacity-80" style={{ animationDelay: '1s' }}>🔥</div>
      <div className="hidden sm:block absolute bottom-1/4 left-1/3 text-base sm:text-lg animate-sparkle opacity-70" style={{ animationDelay: '2s' }}>⭐</div>
    </section>
  );
};
