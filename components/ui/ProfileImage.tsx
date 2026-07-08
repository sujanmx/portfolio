"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { PROFILE } from '@/lib/data';

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'circle' | 'rounded' | 'square';
  priority?: boolean;
}

export const ProfileImage = ({ 
  size = 'md', 
  className, 
  variant = 'circle',
  priority = false 
}: ProfileImageProps) => {
  const sizeMap = {
    sm: { w: 48, h: 48, class: 'w-12 h-12' },
    md: { w: 128, h: 128, class: 'w-32 h-32' },
    lg: { w: 256, h: 256, class: 'w-64 h-64' },
    xl: { w: 384, h: 384, class: 'w-96 h-96' },
  };

  const variantMap = {
    circle: 'rounded-full',
    rounded: 'rounded-2xl',
    square: 'rounded-none',
  };

  const currentSize = sizeMap[size];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative group",
        currentSize.class
      )}
    >
      {/* Refined Ambient Glow */}
      <div className={cn(
        "absolute -inset-2 bg-gradient-to-tr from-accent-glow/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-xl z-0",
        variantMap[variant]
      )} />
      
      <div className={cn(
        "relative z-10 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.01] w-full h-full",
        variantMap[variant]
      )}>
        <Image 
          src={PROFILE.profileImage} 
          alt={PROFILE.name} 
          width={currentSize.w}
          height={currentSize.h}
          className="object-cover transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 w-full h-full"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Subtle Inner Gloss */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>
    </motion.div>
  );
};
