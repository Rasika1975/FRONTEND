import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'DevStudio transformed our vision into reality. Their expertise in full-stack development and attention to detail exceeded our expectations. Our SaaS platform launched successfully and scaled beautifully.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, AI Solutions',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Working with DevStudio was a game-changer. They integrated AI capabilities into our platform seamlessly. The team\'s professionalism and technical skills are unmatched in the industry.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'CTO, FinanceFlow',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The scalable architecture DevStudio built for us has handled our rapid growth perfectly. Their security-first approach gave us confidence in handling sensitive financial data.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Product Manager, InnovateHub',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'DevStudio\'s UI/UX design excellence is evident in our platform\'s user engagement metrics. They created an intuitive interface that our users absolutely love.',
      rating: 5
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the companies we've helped transform
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-purple-500/20 hover:bg-purple-500/40 p-3 rounded-full transition-all duration-300 border border-purple-500/30"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-purple-500/20 hover:bg-purple-500/40 p-3 rounded-full transition-all duration-300 border border-purple-500/30"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial cards */}
          <div className="relative h-96 md:h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full border-2 border-purple-500"
                    />
                    <div className="text-left">
                      <div className="text-white font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-purple-400 font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;