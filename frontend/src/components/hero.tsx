import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Wheat, Leaf, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-farm-pattern opacity-5 z-0"></div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-hero-gradient z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-white font-medium text-sm" style={{ backgroundColor: 'var(--kerala-green)' }}>
              <Leaf className="h-4 w-4 mr-2" />
              <span>AI-Powered Agricultural Guidance</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Empower your farming with{" "}
              <span style={{ color: 'var(--kerala-green)' }}>Krishi&nbsp;Sakhi</span> - Your AI Agricultural Companion
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              Personalized scheme recommendations, AI-powered guidance, and multilingual support for Kerala's farmers. Get instant access to government subsidies and expert agricultural advice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/subsidy">
                <Button
                  size="lg"
                  className="text-white"
                  style={{ backgroundColor: 'var(--kerala-green)' }}
                >
                  Get Personalized Schemes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/chat">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat with AI Assistant
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-gray-100 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold" style={{ color: 'var(--kerala-green)' }}>500+</p>
                <p className="text-gray-600 text-sm">Farmers Assisted</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold" style={{ color: 'var(--kerala-green)' }}>50+</p>
                <p className="text-gray-600 text-sm">Government Schemes</p>
              </div>
              <div className="text-center md:block hidden">
                <p className="text-3xl font-bold" style={{ color: 'var(--kerala-gold)' }}>മലയാളം</p>
                <p className="text-gray-600 text-sm">Malayalam Support</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="lg:w-1/2 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20 animate-float" style={{ backgroundColor: 'var(--kerala-gold)' }}></div>
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 animate-float"
                style={{ animationDelay: "1s", backgroundColor: 'var(--kerala-green)' }}
              ></div>

              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <img
                  src="https://dialogue.earth/content/uploads/2024/03/Pokkali-rice-farming-in-Kerala-India_Alamy_2BAPEC2-1800x1200.jpg"
                  alt="Kerala farmers working in Pokkali rice fields with coconut palms in background"
                  className="w-full h-[400px] object-cover"
                />

                {/* Floating card */}
                <div
                  className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg border border-gray-100 max-w-[200px]"
                  style={{ marginRight: "15px", marginBottom: "15px" }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--kerala-light-green)' }}>
                      <MessageSquare className="h-5 w-5" style={{ color: 'var(--kerala-green)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800">
                        AI-Powered Guidance
                      </p>
                      <p className="text-xs text-gray-500">
                        Malayalam & English
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating wheat icon */}
                <div
                  className="absolute -top-4 left-5 bg-white p-3 rounded-full shadow-lg border border-gray-100"
                  style={{ marginTop: "30px" }}
                >
                  <Wheat className="h-5 w-5" style={{ color: 'var(--kerala-gold)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
