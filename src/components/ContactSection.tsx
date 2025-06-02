
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Twitter, MapPin, Youtube } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-t from-devil-red-darker/50 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-6 glow-text">
            Connect With Us 📞✨
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have a question, wild idea, or just want to chat about games?
            We'd love to hear from you and connect with fellow dreamers and rebels! 😊
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="glass-card border-0 rounded-3xl devil-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                Get In Touch 💬
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-devil-red to-devil-red-dark rounded-full flex items-center justify-center text-2xl">
                    📧
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-200">dreamertheory.india@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-devil-gold to-devil-orange rounded-full flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-200">Karnataka, IN</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-devil-red-dark">
                <p className="text-white font-medium mb-4">Follow Our Journey 🚀</p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-devil-gold/30 hover:border-devil-gold/50 text-devil-gold hover:text-white rounded-full mischief-button"
                    onClick={() => window.open('https://www.youtube.com/@DreamerTheoryIndia', '_blank')}
                  >
                    <Youtube size={16} className="mr-2" />
                    Youtube
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-devil-gold/30 hover:border-devil-gold/50 text-devil-gold hover:text-white rounded-full mischief-button"
                    onClick={() => window.open('https://x.com/Linganagou6097', '_blank')}
                  >
                    <Twitter size={16} className="mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-devil-orange/30 hover:border-devil-orange/50 text-devil-orange hover:text-white rounded-full mischief-button"
                    onClick={() => window.open('https://github.com/DreamerTheory', '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 rounded-3xl devil-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                Newsletter 📬
              </h3>

              <p className="text-gray-200 mb-6">
                Stay updated on our latest mischievous projects, behind-the-scenes chaos,
                and exclusive early access to our upcoming games! 🎮
              </p>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email ✉️"
                  className="w-full px-4 py-3 bg-devil-red-darker/50 border-2 border-devil-red/30 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-devil-gold/50 transition-colors"
                />
                <Button
                  onClick={() => window.open('mailto:dreamertheory.india@gmail.com', '_blank')}
                  className="w-full mischief-button text-white font-bold py-4 rounded-full hover:scale-105 transition-all duration-300 devil-shadow"
                >
                  Subscribe to Updates 🚀
                </Button>
              </div>

              <p className="text-gray-300 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time. 🔒
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-16 border-t border-devil-red-dark">
          <p className="text-gray-300">
            © 2024 DreamerTheory. All rights reserved.
            <span className="block mt-2 text-devil-gold italic">
              Made with ❤️ and endless mischievous imagination 😈✨
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
