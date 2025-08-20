import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    'About Us', 'Services', 'Portfolio', 'Contact',
    'Privacy Policy', 'Terms of Service', 'FAQ', 'Blog'
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                DevStudio
              </h3>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Leading full-stack developers specializing in SaaS and AI platforms, 
                delivering affordable and reliable website development services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-purple-400" />
                  <span>hello@devstudio.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 DevStudio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;