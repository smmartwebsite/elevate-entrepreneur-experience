
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:pr-10">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-blue-800 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your <span className="text-brand-orange-500">Entrepreneurial</span> Journey
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Proven methodologies that have helped over 12,000 entrepreneurs build sustainable, thriving businesses.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-brand-orange-600 hover:bg-brand-orange-700 text-white font-medium">
                Find Your Program
              </Button>
              <Button size="lg" variant="outline" className="border-brand-blue-600 text-brand-blue-600">
                View Success Stories
              </Button>
            </motion.div>
            
            <motion.div 
              className="pt-8 flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-blue-700">24+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-blue-700">12K+</p>
                <p className="text-sm text-gray-600">Entrepreneurs</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-blue-700">98%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-800/80 to-brand-blue-600/70 mix-blend-multiply rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Entrepreneurs collaborating"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl font-bold mb-2">Join Our Community</p>
              <p className="text-sm opacity-90">Connect with like-minded entrepreneurs and start your growth journey today</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
