import { PROJECTS } from "@/lib/data";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-32">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover grayscale opacity-50" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-20 px-6 container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Typography variant="small" className="mb-4 text-accent-glow">
              {project.category}
            </Typography>
            <Typography variant="h1" className="mb-6 text-white leading-tight">
              {project.title}
            </Typography>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-secondary border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-6xl mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar - Meta Data */}
          <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-32">
              <div className="glass p-8 rounded-3xl space-y-8">
                <div>
                  <Typography variant="small" className="mb-4 block">The Problem</Typography>
                  <Typography variant="p" className="opacity-80">{project.problem}</Typography>
                </div>
                <div>
                  <Typography variant="small" className="mb-4 block">The Goal</Typography>
                  <Typography variant="p" className="opacity-80">{project.goal}</Typography>
                </div>
                <div>
                  <Typography variant="small" className="mb-4 block">The Impact</Typography>
                  <Typography variant="p" className="text-accent-glow font-medium">{project.impact}</Typography>
                </div>
                <Link href="/#projects">
                  <Button variant="outline" className="w-full">Back to Gallery</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Long Form Storytelling */}
          <div className="lg:col-span-8 space-y-24">
            <section>
              <Typography variant="h2" className="mb-8">The Narrative</Typography>
              <Typography variant="p" className="text-xl leading-relaxed opacity-80">
                {project.longDescription}
              </Typography>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl">
                <Typography variant="h3" className="mb-4">Research</Typography>
                <Typography variant="p" className="opacity-60">{project.research}</Typography>
              </div>
              <div className="glass p-8 rounded-3xl">
                <Typography variant="h3" className="mb-4">Process</Typography>
                <Typography variant="p" className="opacity-60">{project.process}</Typography>
              </div>
            </section>

            <section className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-muted border border-white/10">
               <div className="absolute inset-0 flex items-center justify-center text-secondary opacity-20 italic">
                 [ Prototype / UI Gallery Image Placeholder ]
               </div>
            </section>

            <section className="space-y-8">
              <Typography variant="h2" className="mb-8">Solution & Execution</Typography>
              <Typography variant="p" className="opacity-80 leading-relaxed">
                {project.solution}
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Typography variant="small" className="mb-2 block">Typography</Typography>
                  <Typography variant="p" className="text-sm">Premium Sans-Serif</Typography>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Typography variant="small" className="mb-2 block">Palette</Typography>
                  <Typography variant="p" className="text-sm">Monochrome & Accent</Typography>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Typography variant="small" className="mb-2 block">Components</Typography>
                  <Typography variant="p" className="text-sm">Modular Glassmorphism</Typography>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
