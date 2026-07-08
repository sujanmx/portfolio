"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { PROFILE, SKILLS } from "@/lib/data";
import { ProfileImage } from "@/components/ui/ProfileImage";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background subtle decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-glow/[0.03] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <Typography variant="small" className="text-accent-glow">The Designer</Typography>
              <Typography variant="h2" className="max-w-3xl">
                Bridging the gap between <br /> 
                <span className="text-neutral-500">Vision & Execution.</span>
              </Typography>
              <Typography variant="p" className="text-lg md:text-xl opacity-80 leading-relaxed max-w-2xl">
                {PROFILE.summary}
              </Typography>
              <Typography variant="p" className="opacity-60 leading-relaxed max-w-2xl">
                I specialize in bridging the gap between complex user requirements and elegant visual solutions. 
                My approach is rooted in research, iterative prototyping, and a relentless focus on accessibility, 
                ensuring that every pixel serves a functional purpose.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 items-center md:items-start pt-8 border-t border-white/5">
               <ProfileImage size="md" variant="rounded" />
               <div className="text-center md:text-left">
                 <Typography variant="h3" className="mb-2">{PROFILE.name}</Typography>
                 <Typography variant="small" className="text-secondary">{PROFILE.role} • {PROFILE.location}</Typography>
               </div>
            </motion.div>
          </div>

          {/* Skills & Tools Grid - Asymmetrical layout */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              variants={itemVariants}
              className="glass p-8 rounded-3xl hover:border-white/20 transition-all duration-500 group"
            >
              <Typography variant="small" className="mb-6 block text-accent-glow">Expertise</Typography>
              <div className="flex flex-wrap gap-2">
                {SKILLS.design.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-secondary group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass p-8 rounded-3xl hover:border-white/20 transition-all duration-500 group"
            >
              <Typography variant="small" className="mb-6 block text-accent-glow">Toolkit</Typography>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-secondary group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass p-8 rounded-3xl md:col-span-2 hover:border-white/20 transition-all duration-500 group"
            >
              <Typography variant="small" className="mb-6 block text-accent-glow">Technical Stack</Typography>
              <div className="flex flex-wrap gap-2">
                {SKILLS.technical.map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-secondary group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
