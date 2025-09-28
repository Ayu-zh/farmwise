import React from "react";
import {
  Target,
  MessageSquare,
  FileText,
  Globe,
  User,
  Database,
} from "lucide-react";

const features = [
  {
    icon: <Target className="h-6 w-6" style={{ color: 'var(--kerala-green)' }} />,
    title: "AI-Powered Scheme Matching",
    description:
      "Get personalized government scheme recommendations based on your farm profile, location, and crop choices.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" style={{ color: 'var(--kerala-blue)' }} />,
    title: "Conversational AI Interface",
    description:
      "Chat with our AI assistant in Malayalam or English to get instant answers about schemes and farming practices.",
  },
  {
    icon: <FileText className="h-6 w-6" style={{ color: 'var(--kerala-gold)' }} />,
    title: "Document Analysis & Summaries",
    description:
      "Upload and analyze complex government scheme documents with AI-powered summaries in simple language.",
  },
  {
    icon: <Globe className="h-6 w-6" style={{ color: 'var(--kerala-green)' }} />,
    title: "Multilingual Support",
    description:
      "Access all features in Malayalam and English, making agricultural guidance accessible to all farmers.",
  },
  {
    icon: <User className="h-6 w-6" style={{ color: 'var(--kerala-blue)' }} />,
    title: "Personalized Recommendations",
    description:
      "Receive tailored advice based on your land size, crop type, location, and farming practices.",
  },
  {
    icon: <Database className="h-6 w-6" style={{ color: 'var(--kerala-gold)' }} />,
    title: "Government Scheme Database",
    description:
      "Access comprehensive information about Kerala and central government agricultural schemes and subsidies.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24" style={{ backgroundColor: 'var(--kerala-light-blue)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AI-Powered Agricultural Solutions for Kerala Farmers
          </h2>
          <p className="text-gray-600">
            Krishi Sakhi provides intelligent scheme matching, conversational AI support, and document analysis to help Kerala's farmers access government benefits and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full w-14 h-14 flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--kerala-light-green)' }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
