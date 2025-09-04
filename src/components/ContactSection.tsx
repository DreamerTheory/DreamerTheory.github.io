import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Youtube } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-t from-devil-red-darker/50 to-transparent"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-6 glow-text">
            Connect With Us 📞✨
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have a question, wild idea, or just want to chat about games? We&apos;d
            love to hear from you and connect with fellow dreamers and rebels! 😊
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Card */}
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
                <p className="text-white font-medium mb-4">
                  Follow Our Journey 🚀
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-devil-gold/30 hover:border-devil-gold/50 text-devil-gold hover:text-white rounded-full mischief-button"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@DreamerTheoryIndia",
                        "_blank"
                      )
                    }
                  >
                    <Youtube size={16} className="mr-2" />
                    Youtube
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-devil-gold/30 hover:border-devil-gold/50 text-devil-gold hover:text-white rounded-full mischief-button"
                    onClick={() =>
                      window.open("https://x.com/Linganagou6097", "_blank")
                    }
                  >
                    <Twitter size={16} className="mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-devil-orange/30 hover:border-devil-orange/50 text-devil-orange hover:text-white rounded-full mischief-button"
                    onClick={() =>
                      window.open("https://github.com/DreamerTheory", "_blank")
                    }
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mailchimp Subscribe Form */}
          <Card className="glass-card border-0 rounded-3xl devil-shadow">
            <CardContent className="p-8">
              <form
                action="https://dreamertheory.us1.list-manage.com/subscribe/post?u=c677225c1bf89b6b1dc9de5fe&amp;id=7a8c98eab1&amp;f_id=00f1f5e5f0"
                method="post"
                target="_blank"
                noValidate
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-white">Subscribe</h2>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="mce-EMAIL"
                    className="mb-1 font-medium text-gray-200"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                    className="border p-2 rounded text-black"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label
                    htmlFor="mce-PHONE"
                    className="mb-1 font-medium text-gray-200"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="PHONE"
                    id="mce-PHONE"
                    className="border p-2 rounded text-black"
                    placeholder="Optional"
                  />
                </div>

                {/* Anti-bot field (hidden) */}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_c677225c1bf89b6b1dc9de5fe_7a8c98eab1"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-devil-red text-white px-4 py-2 rounded hover:bg-devil-red-dark transition"
                >
                  Subscribe
                </button>
              </form>
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
