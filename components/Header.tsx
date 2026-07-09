"use client";
import { motion } from 'framer-motion';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { useState, useEffect } from 'react';

export const Header = () =>{
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = new Map();
    const sections = ['hero', 'selected-works', 'about', 'skills', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-20% 0px -70% 0px', // Adjust to trigger when section is clearly in view
        threshold: 0 
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md"
    >
      <a href="#hero" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <ProfileImage size="sm" variant="circle" />
        <div className="text-xl font-bold tracking-tight">Sujan.</div>
      </a>
      <nav className="flex gap-6">
        {[
          { name: 'Work',   id: 'selected-works' },
          { name: 'About',  id: 'about' },
          { name: 'Skills', id: 'skills' },
          { name: 'Contact', id: 'contact' },
        ].map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            whileHover={{ scale: 1.1 }}
            className={`relative transition-colors duration-300 ${
              activeSection === item.id ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            {item.name}
            {activeSection === item.id && (
              <motion.div 
                layoutId="nav-active"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-glow rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
};
