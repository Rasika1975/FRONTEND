import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Layers, Palette, Shield, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end solutions with modern technologies and best practices for scalable applications.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'SaaS & AI Solutions',
      description: 'Cutting-edge SaaS platforms integrated with AI capabilities to drive your business forward.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Robust, future-proof architectures designed to grow with your business needs.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design Excellence',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data and users.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Lightning-fast applications optimized for speed and efficiency.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver comprehensive solutions with cutting-edge technologies to bring your vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Features;