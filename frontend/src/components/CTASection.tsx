import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 text-white" style={{ backgroundColor: 'var(--kerala-green)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to access Kerala's agricultural schemes with AI assistance?
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Join hundreds of Kerala farmers who have simplified their access to government schemes and received personalized agricultural guidance through Krishi Sakhi.
            </p>
          </div>

          <div className="md:w-1/3 flex flex-col space-y-4">
            <Link to="/subsidy">
              <Button
                size="lg"
                className="w-full bg-white hover:bg-gray-100"
                style={{ color: 'var(--kerala-green)' }}
              >
                Start Your Scheme Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/chat">
              <Button
                size="lg"
                className="w-full bg-white hover:bg-gray-100"
                style={{ color: 'var(--kerala-green)' }}
              >
                Chat with AI Assistant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/scheme">
              <Button
                size="lg"
                className="w-full bg-white hover:bg-gray-100"
                style={{ color: 'var(--kerala-gold)' }}
              >
                Analyze Scheme Documents
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
