import React from 'react';
import { Scale, Shield, Users, Award, Clock, Phone, ArrowRight, CheckCircle, Star, Building2, Gavel, Mail } from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const services = [
    {
      icon: <Scale className="w-10 h-10" />,
      title: "Legal Consultation",
      description: "Expert legal advice tailored to your specific situation with comprehensive strategy planning and risk assessment.",
      features: ["Initial Consultation", "Case Evaluation", "Strategic Planning", "Risk Analysis"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Contract Review",
      description: "Thorough contract analysis and negotiation support to protect your interests and ensure legal compliance.",
      features: ["Document Review", "Risk Assessment", "Negotiation Support", "Compliance Verification"]
    },
    {
      icon: <Gavel className="w-10 h-10" />,
      title: "Litigation Support",
      description: "Comprehensive court representation with strategic case management and experienced trial advocacy.",
      features: ["Court Representation", "Case Preparation", "Settlement Negotiation", "Trial Advocacy"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      company: "TechCorp Industries",
      content: "The legal team provided exceptional guidance during our complex merger process. Their attention to detail and strategic insight was invaluable to our success.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Managing Director",
      company: "Urban Development LLC",
      content: "Professional, knowledgeable, and results-oriented. They successfully navigated complex regulatory requirements and delivered outstanding results.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Business Owner",
      company: "Rodriguez Consulting Group",
      content: "Their expertise in employment law helped us establish compliant policies and procedures. The guidance was clear, practical, and highly effective.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "General Counsel",
      company: "Global Enterprises",
      content: "Outstanding legal representation that exceeded our expectations. Their strategic approach and deep industry knowledge made all the difference.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      role: "Founder & CEO",
      company: "Innovation Labs",
      content: "The team's expertise in intellectual property law protected our innovations and helped us secure crucial patents. Highly recommended!",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      role: "Operations Director",
      company: "Manufacturing Corp",
      content: "They handled our complex regulatory compliance issues with professionalism and efficiency. The results speak for themselves.",
      rating: 5,
      avatar: "RM"
    }
  ];

  const practiceAreas = [
    { name: "Corporate Law", icon: <Building2 className="w-8 h-8" />, cases: "250+" },
    { name: "Real Estate", icon: <Building2 className="w-8 h-8" />, cases: "300+" },
    { name: "Employment Law", icon: <Users className="w-8 h-8" />, cases: "180+" },
    { name: "Litigation", icon: <Gavel className="w-8 h-8" />, cases: "200+" },
    { name: "Regulatory Compliance", icon: <Shield className="w-8 h-8" />, cases: "150+" },
    { name: "Intellectual Property", icon: <Award className="w-8 h-8" />, cases: "120+" }
  ];

  return (
    <div
      className="bg-white transition-colors duration-300 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse Following Light Effect */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 197, 253, 0.2) 50%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Our clients' success is our priority. Here's what they have to say about working with our legal team.
            </p>
          </div>

          {/* Animated Testimonials Loop */}
          <div className="relative overflow-hidden">
            {/* Track Ties */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute w-4 bg-white opacity-30" style={{ left: `${i * 5}%` }}></div>
              ))}
            </div>

            {/* CSS for animations */}
            <style jsx>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              
              @keyframes scroll-right {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(0);
                }
              }
              
              .animate-scroll-left {
                animation: scroll-left 30s linear infinite;
              }
              
              .animate-scroll-right {
                animation: scroll-right 30s linear infinite;
              }
            `}</style>

            {/* First Row - Moving Left */}
            <div className="flex animate-scroll-left space-x-8 mb-8">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 w-80 bg-white p-6 border border-gray-200 shadow-xl rounded-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-blue-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Hover Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/20 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-current group-hover:scale-110 transition-transform duration-300" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 leading-relaxed italic text-sm group-hover:text-gray-800 transition-colors duration-300">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-blue-200 group-hover:to-blue-300 flex items-center justify-center font-semibold text-gray-700 group-hover:text-blue-700 text-sm rounded-full shadow-md transition-all duration-300">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-900 transition-colors duration-300">{testimonial.name}</div>
                        <div className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">{testimonial.role}</div>
                        <div className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Moving Right */}
            <div className="flex animate-scroll-right space-x-8 mb-8">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 w-80 bg-white p-6 border border-gray-200 shadow-xl rounded-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-blue-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Hover Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/20 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current group-hover:scale-110 transition-transform duration-300" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 leading-relaxed italic text-sm group-hover:text-gray-800 transition-colors duration-300">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-blue-200 group-hover:to-blue-300 flex items-center justify-center font-semibold text-gray-700 group-hover:text-blue-700 text-sm rounded-full shadow-md transition-all duration-300">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-900 transition-colors duration-300">{testimonial.name}</div>
                        <div className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">{testimonial.role}</div>
                        <div className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors duration-300">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;