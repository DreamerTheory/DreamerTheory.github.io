
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-2xl overflow-hidden devil-shadow animate-wiggle">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/231f49f5-e747-47e2-a87f-b3c03c0b414f.png`}
                alt="DreamerTheory Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-orbitron font-bold text-lg sm:text-2xl glow-text">
              DreamerTheory
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('games')}
              className="text-white hover:text-devil-gold transition-colors font-semibold text-sm lg:text-base"
            >
              Games
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-white hover:text-devil-gold transition-colors font-semibold text-sm lg:text-base"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-devil-gold transition-colors font-semibold text-sm lg:text-base"
            >
              Contact
            </button>
            <button
              onClick={() => window.open('/gridsystem.html', '_blank')}
              className="text-white hover:text-devil-gold transition-colors font-semibold text-sm lg:text-base"
            >
              Documentation
            </button>

          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('games')}
              className="hidden sm:block mischief-button text-white font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full hover:bg-devil-red-dark transition-all duration-300"
            >
              See Our Worlds 🔥
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-card rounded-2xl">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <button
                onClick={() => scrollToSection('games')}
                className="text-white hover:text-devil-gold transition-colors font-semibold text-left"
              >
                Games
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-white hover:text-devil-gold transition-colors font-semibold text-left"
              >
                Philosophy
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-devil-gold transition-colors font-semibold text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('games')}
                className="sm:hidden mischief-button text-white font-bold py-3 px-6 rounded-full hover:bg-devil-red-dark transition-all duration-300 mt-4"
              >
                See Our Worlds 🔥
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
