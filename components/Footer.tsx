"use client";
import { Typography } from "@/components/ui/Typography";
import { PROFILE } from "@/lib/data";
import { ProfileImage } from "@/components/ui/ProfileImage";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <ProfileImage size="sm" variant="circle" />
            <div>
              <Typography variant="h3" className="text-white mb-2">
                {PROFILE.name}
              </Typography>
              <Typography variant="small" className="opacity-40">
                © {new Date().getFullYear()} All rights reserved.
              </Typography>
            </div>
          </div>
          
          <div className="flex gap-8">
            <Link href="#" className="text-secondary hover:text-white transition-colors text-sm">Twitter</Link>
            <Link href={PROFILE.linkedin} className="text-secondary hover:text-white transition-colors text-sm">LinkedIn</Link>
            <Link href={PROFILE.behance} className="text-secondary hover:text-white transition-colors text-sm">Behance</Link>
            <Link href="mailto:sujanmandal2393@gmail.com" className="text-secondary hover:text-white transition-colors text-sm">Email</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
