import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { ArrowRightCircle, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-indigo-500 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-purple-500 rounded-full filter blur-[120px] animate-float" />
      </div>

      <ThreeScene />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center pt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm md:text-base text-indigo-400 font-medium mb-3"
            >
              Hello, I'm
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            >
              Omar Ahmed
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text font-bold">
                Frontend Developer
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0"
            >
              I'm a passionate Frontend Developer with a strong eye for design and a deep love for creating intuitive
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="#projects" 
                className="py-3 px-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                View My Work <ArrowRightCircle size={18} />
              </a>
              <a 
                href="public/images/my-cv.pdf" 
                className="py-3 px-6 rounded-full bg-transparent border border-gray-600 text-gray-200 font-medium transition-all duration-300 hover:bg-gray-800 hover:border-gray-500 flex items-center justify-center gap-2"
              >
                Download CV <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden md:block"
          >
            {/* This div is empty as the 3D element is handled by the ThreeScene component */}
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
          className="text-center text-gray-400 text-sm"
        >
          Scroll Down
          <div className="mt-2 w-5 h-5 mx-auto border-b-2 border-r-2 border-gray-400 transform rotate-45" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;