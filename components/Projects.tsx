"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { PROJECTS, PROFILE } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, itemVariants }: { project: typeof PROJECTS[0], itemVariants: any }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-muted/40 backdrop-blur-sm border border-white/10 premium-shadow transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
    >
      <Link 
        href={project.behanceUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={`Open ${project.title} case study on Behance`}
        className="flex flex-col h-full"
      >
        {/* Image Area */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle Gradient Bottom - ensures smooth transition to content area */}
          <div className="absolute inset-0 bg-gradient-to-t from-muted via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-col h-full">
            <Typography variant="small" className="mb-2 text-accent-glow font-medium tracking-wide">
              {project.category}
            </Typography>

            <Typography variant="h3" className="mb-3 text-white group-hover:text-white transition-colors leading-tight">
              {project.title}
            </Typography>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] uppercase tracking-wider opacity-40 text-secondary font-semibold px-2 py-0.5 bg-white/5 rounded-full border border-white/5">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-2">
              <motion.div 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-11 flex items-center justify-center px-6 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium transition-all duration-300 group/btn hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">View Case Study</span>
                <motion.span 
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  →
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="selected-works" className="py-32 relative overflow-hidden">
      {/* Background subtle decor */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-accent-glow/[0.02] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <Typography variant="small" className="mb-4 text-accent-glow">Selected Works</Typography>
            <Typography variant="h2" className="mb-6">Case Studies of <br /> Digital Innovation.</Typography>
            <Typography variant="p" className="opacity-60 leading-relaxed">
              A collection of projects where user research meets visual excellence. 
              Every project is a journey from problem identification to a polished, 
              production-ready solution.
            </Typography>
          </div>
          <motion.a
            href={PROFILE.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all UI/UX projects on Behance"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-transparent text-foreground text-base font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
          >
            View All Projects
            <motion.span 
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              →
            </motion.span>
          </motion.a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              itemVariants={itemVariants} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
