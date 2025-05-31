
import { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create sparkling particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      // Add some variety in size
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random sparkle colors
      const colors = ['#FFD700', '#FF6B6B', '#FFA500', '#FF4500'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.boxShadow = `0 0 ${size * 2}px ${particle.style.background}`;
      
      container.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 6000);
    };

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      setTimeout(createParticle, i * 150);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(179, 29, 29, 0.2) 0%, transparent 70%)'
      }}
    />
  );
};
