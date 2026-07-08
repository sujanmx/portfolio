"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { PROFILE } from "@/lib/data";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Mail, Linkedin, Figma, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="mb-8">
                <ProfileImage size="md" variant="rounded" />
              </div>
              <Typography variant="small" className="mb-4 text-accent-glow">Get In Touch</Typography>
              <Typography variant="h2" className="mb-8">Let's Build Something <br /> <span className="text-neutral-500">Extraordinary.</span></Typography>
              <Typography variant="p" className="text-lg mb-12 opacity-60 leading-relaxed">
                I'm currently open to freelance opportunities and full-time roles. 
                Whether you have a project in mind or just want to say hi, my inbox is always open.
              </Typography>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:text-accent-glow transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <Typography variant="small" className="block opacity-40">Email</Typography>
                    <Typography variant="p" className="text-white">{PROFILE.email}</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:text-accent-glow transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <Typography variant="small" className="block opacity-40">LinkedIn</Typography>
                    <Typography variant="p" className="text-white">hey-sujan</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:text-accent-glow transition-colors">
                    <Figma size={20} />
                  </div>
                  <div>
                    <Typography variant="small" className="block opacity-40">Behance</Typography>
                    <Typography variant="p" className="text-white">sujanmandal20</Typography>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-glow/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            <form className="space-y-6 relative z-10" aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Typography variant="small" className="opacity-40">Name</Typography>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-glow/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Typography variant="small" className="opacity-40">Email</Typography>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-glow/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Typography variant="small" className="opacity-40">Message</Typography>
                <textarea 
                  placeholder="Tell me about your project..." 
                  rows={5}
                  required
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-glow/50 transition-all"
                />
              </div>
              <Button type="submit" size="lg" className="w-full py-4">
                Send Message <ExternalLink size={16} className="ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

