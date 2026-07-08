"use client";
import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { PROFILE } from '@/lib/data';
import { ProfileImage } from '@/components/ui/ProfileImage';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-start justify-center px-6 overflow-hidden pt-28 pb-20 lg:pt-24 lg:pb-0">
      {/* Refined Ambient Background - Multi-layered Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent-glow/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-glow/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-glow"></span>
            </span>
            <Typography variant="small" className="text-secondary">
              Available for New Opportunities
            </Typography>
          </motion.div>

          <Typography variant="h1" className="mb-8 md:mb-8 text-gradient">
            Designing <br /> 
            <span className="text-white italic font-serif">Digital</span> <br /> 
            Excellence.
          </Typography>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl mb-10 md:mb-12"
          >
            <Typography variant="p" className="text-lg md:text-xl opacity-70 leading-relaxed">
              {PROFILE.summary}
            </Typography>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-5"
          >
            <a href="#selected-works">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-20 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <ProfileImage size="xl" priority />
            
            {/* Decorative Element - Subtle Ring */}
            <div className="absolute -inset-4 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-8 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
          </motion.div>
          
          {/* Background Decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-glow/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
