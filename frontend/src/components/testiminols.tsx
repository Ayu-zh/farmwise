import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Krishi Sakhi helped me find the perfect water management scheme for my rice fields in Kuttanad. The AI understood my specific needs and guided me through the entire application process in Malayalam.",
    author: "Ravi Krishnan",
    role: "Rice Farmer, Kuttanad",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The AI chat feature saved my spice plantation when I had urgent questions about organic certification schemes. I got instant answers in my language and successfully applied for the subsidy.",
    author: "Meera Nair",
    role: "Spice Farmer, Idukki",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    content:
      "As a young coconut farmer, I was overwhelmed by government scheme documents. Krishi Sakhi's document analysis feature simplified everything and helped me access three different subsidies.",
    author: "Arjun Pillai",
    role: "Coconut Farmer, Thrissur",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--kerala-light-green)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Kerala's Farming Community
          </h2>
          <p className="text-gray-600">
            Hear from farmers across Kerala about how Krishi Sakhi has helped them access government schemes and improve their agricultural practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up relative"
              style={{ animationDelay: `${testimonial.id * 0.1}s` }}
            >
              {/* Quotation mark */}
              <div className="absolute -top-4 -left-4 text-white w-8 h-8 flex items-center justify-center rounded-full text-xl font-bold" style={{ backgroundColor: 'var(--kerala-green)' }}>
                "
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-current text-yellow-400"
                        : "text-gray-300"
                    }`}
                    style={i < testimonial.rating ? { color: 'var(--kerala-gold)' } : {}}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover border-2"
                  style={{ borderColor: 'var(--kerala-green)' }}
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
