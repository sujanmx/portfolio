"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { EXPERIENCE, EDUCATION } from "@/lib/data";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-glow/[0.03] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <Typography variant="small" className="mb-4 text-accent-glow">The Journey</Typography>
          <Typography variant="h2" className="mb-6">Professional Evolution</Typography>
          <Typography variant="p" className="max-w-2xl mx-auto opacity-60">
            Tracing a path of continuous growth, from academic foundations to delivering 
            high-impact design solutions in professional environments.
          </Typography>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-12"
        >
          {/* The Trajectory Line - Only visible on desktop */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          {/* Professional Experience */}
          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={`exp-${i}`}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className="glass p-8 rounded-3xl hover:border-white/20 transition-all duration-500 group premium-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                    <Typography variant="h3" className="group-hover:text-accent-glow transition-colors">
                      {exp.role}
                    </Typography>
                    <Typography variant="small" className="text-secondary bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {exp.period}
                    </Typography>
                  </div>
                  
                  <Typography variant="h3" className="text-white mb-4 text-lg font-semibold">
                    {exp.company}
                  </Typography>
                  
                  <Typography variant="p" className="mb-8 opacity-70 leading-relaxed">
                    {exp.description}
                  </Typography>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.responsibilities.map((res, j) => (
                      <div key={j} className="flex items-start gap-3 text-sm text-secondary opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-accent-glow mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-glow shrink-0" />
                        {res}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Milestone Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-background border-2 border-accent-glow shadow-[0_0_15px_rgba(0,180,255,0.5)]" />
              </div>

              {/* Empty space for the opposite side of the trajectory */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}

          {/* Education */}
          {EDUCATION.map((edu, i) => (
            <motion.div 
              key={`edu-${i}`}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2 md:ml-auto">
                <div className="glass p-8 rounded-3xl border-dashed border-white/10 hover:border-white/20 transition-all duration-500 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                    <Typography variant="h3" className="text-secondary">Education</Typography>
                    <Typography variant="small" className="text-secondary/50">Academic Foundation</Typography>
                  </div>
                  <Typography variant="h3" className="text-white mb-2">{edu.degree} in {edu.major}</Typography>
                  <Typography variant="p" className="opacity-60">{edu.institution}</Typography>
                </div>
              </div>
              
              {/* Center Milestone Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-background border-2 border-secondary shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
              </div>

              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
