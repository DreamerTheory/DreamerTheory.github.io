
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Heart, Zap } from 'lucide-react';

const philosophies = [
  {
    icon: Lightbulb,
    title: "Mischief & Magic",
    description: "We believe the best games have a spark of rebellious creativity. Every world we create starts with a devilish 'what if' that breaks the rules in the most delightful way.",
    emoji: "😈"
  },
  {
    icon: Heart,
    title: "Stories That Stick",
    description: "Games are emotional roller coasters that stay with you forever. We craft narratives that make you laugh, cry, and everything in between—because the best stories are felt, not just played.",
    emoji: "💝"
  },
  {
    icon: Zap,
    title: "Playful Innovation",
    description: "Why be serious when you can be seriously fun? We focus on innovative mechanics that feel natural and exciting, creating depth through joyful, intuitive design.",
    emoji: "⚡"
  }
];

export const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 px-6 bg-gradient-to-b from-transparent to-devil-red-darker/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-6 glow-text">
            Our Philosophy 🎭
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Every game we create is built on these core principles that guide our creative chaos 
            and define what it means to be a mischievously magical DreamerTheory experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <Card 
              key={philosophy.title}
              className="glass-card border-0 text-center group hover:scale-105 transition-all duration-500 rounded-3xl devil-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-devil-red to-devil-red-dark rounded-full flex items-center justify-center group-hover:animate-wiggle transition-transform duration-300 devil-shadow text-3xl">
                    {philosophy.emoji}
                  </div>
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-devil-gold transition-colors">
                  {philosophy.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed">
                  {philosophy.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-6 rounded-3xl devil-shadow">
            <p className="text-2xl font-orbitron text-devil-gold italic">
              "We don't just make games—we craft delightful chaos." 😎✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
