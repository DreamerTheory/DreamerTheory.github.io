
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users } from 'lucide-react';
import { link } from 'fs';

const games = [
  {
    title: "WILDLIGHT CAMP",
    description: "WILDLIGHT CAMP is a cozy simulation game where intelligent animals build, gather, and protect a wild forest camp.",
    image: `${import.meta.env.BASE_URL}lovable-uploads/Wildlight-Camp splash.png`,
    status: "In Development",
    rating: null,
    playtime: "25+ hours",
    link: "https://www.youtube.com/watch?v=2qcC6elLbk8&list=PLUYNufBU4WRPw6QA87xRTgk0-0PoxhCQv"
  } 
];

export const FeaturedGames = () => {
  return (
    <section id="games" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-6 glow-text">
            Featured Worlds 🎮
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Immerse yourself in our carefully crafted universes, each with its own unique story, 
            characters, and delightfully mischievous mysteries waiting to be discovered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Card 
              key={game.title}
              className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500 rounded-3xl devil-shadow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-devil-red-darker/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    game.status === 'Released' 
                      ? 'bg-green-500/20 text-green-300 border-2 border-green-500/30' 
                      : game.status === 'Coming Soon'
                      ? 'bg-devil-gold/20 text-devil-gold border-2 border-devil-gold/30'
                      : 'bg-devil-orange/20 text-devil-orange border-2 border-devil-orange/30'
                  }`}>
                    {game.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-devil-gold transition-colors">
                  {game.title}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    {game.rating && (
                      <div className="flex items-center space-x-1">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span>{game.rating}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{game.playtime}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mischief-button text-white font-bold py-3 rounded-full hover:scale-105 transition-all duration-300"
                  variant="outline"
                  onClick={() => window.open(game.link, '_blank')}
                >
                  {game.status === 'Released' ? 'Play Now 🎮' : 'Learn More 👀'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
