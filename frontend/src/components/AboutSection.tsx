import React from "react";
import { CheckCircle, Leaf } from "lucide-react";

const benefits = [
  "AI-powered personalized scheme recommendations for Kerala farmers",
  "Multilingual support in Malayalam and English",
  "Simplified access to complex government scheme documents",
  "Instant AI assistance for rice, coconut, spice, and rubber farming",
  "Streamlined application process for agricultural subsidies",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image side */}
          <div className="lg:w-1/2 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: 'var(--kerala-green)' }}></div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-20" style={{ backgroundColor: 'var(--kerala-gold)' }}></div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Kerala farmers using modern technology"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content side */}
          <div
            className="lg:w-1/2 space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-white font-medium text-sm" style={{ backgroundColor: 'var(--kerala-green)' }}>
              <Leaf className="h-4 w-4 mr-2" />
              <span>Solving Kerala's Agricultural Challenges</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Bridging the Gap for{" "}
              <span style={{ color: 'var(--kerala-green)' }}>Kerala's Smallholder Farmers</span>
            </h2>

            <p className="text-gray-600">
              Kerala's smallholder farmers face unique challenges with complex government scheme documentation and generic agricultural advice. Krishi Sakhi uses AI to understand local farming contexts - from Kuttanad's rice paddies to Idukki's spice gardens - providing personalized scheme recommendations and multilingual support that makes government benefits truly accessible.
            </p>

            <div className="space-y-3 mt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--kerala-green)' }} />
                  <span className="ml-3 text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="John Doe"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">Dr. Priya Nair</p>
                  <p className="text-sm text-gray-500">Agricultural AI Specialist, Krishi Sakhi</p>
                </div>
              </div>
              <p className="italic text-gray-600 mt-3">
                "By combining AI technology with deep understanding of Kerala's agricultural landscape, we're making government schemes accessible to every farmer, from traditional rice cultivators to modern spice growers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
