"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";

// ─── Simple Icons ─────────────────────────────────────────────────────────────
import {
  SiFigma,
  SiMiro,
  SiNotion,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiBehance,
  SiVercel,
} from "react-icons/si";

// ─── Devicon (official Adobe colors, VS Code, CSS3) ──────────────────────────
import {
  DiIllustrator,
  DiPhotoshop,
  DiCss3,
  DiVisualstudio,
} from "react-icons/di";

// ─── Font Awesome (Figma, LinkedIn, Adobe XD) ─────────────────────────────────
import { FaFigma, FaLinkedin } from "react-icons/fa";

// ─── VS Code official ─────────────────────────────────────────────────────────
import { VscVscode } from "react-icons/vsc";

// ─── Canva — use a clean inline SVG since no official icon exists ─────────────
const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#00C4CC" />
    <path
      d="M16.5 8.5c-.8-.8-2-.8-2.8 0L8.5 13.7c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l5.2-5.2c.8-.8.8-2 0-2.8z"
      fill="#fff"
    />
  </svg>
);

// ─── Adobe XD — precise official mark ────────────────────────────────────────
const AdobeXdIcon = () => (
  <svg viewBox="0 0 240 234" className="w-7 h-7" aria-hidden="true">
    <rect width="240" height="234" rx="42.5" fill="#FF61F6" />
    <path
      d="M54.5 170V64h36.3c10 0 18.6 2.1 25.8 6.4 7.2 4.2 12.7 10.2 16.5 18s5.7 16.8 5.7 27c0 10.4-1.9 19.4-5.8 27.2-3.9 7.7-9.5 13.7-16.8 18C109 165 100.4 167 90.3 167H54.5V170zm23.5-19.4H89c7 0 12.8-1.2 17.4-3.7 4.6-2.5 8-6.3 10.3-11.3 2.2-5.1 3.3-11.4 3.3-18.9 0-7.3-1.1-13.5-3.3-18.5-2.2-5-5.6-8.8-10.1-11.3-4.5-2.5-10.2-3.7-17.1-3.7H78V150.6zM196 170l-28.6-42.4L139.6 170h-25l41.3-55-39.5-51h25.4l27 39.8 26.8-39.8H220l-39.4 51L222 170h-26z"
      fill="#fff"
    />
  </svg>
);

// ─── FigJam — Figma's official secondary mark ─────────────────────────────────
const FigJamIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#F24E1E" />
    <path d="M7 12a5 5 0 0 1 5-5h0a5 5 0 0 1 0 10h0a5 5 0 0 1-5-5z" fill="#fff" fillOpacity=".9" />
    <circle cx="12" cy="12" r="2.5" fill="#F24E1E" />
  </svg>
);

// ─── Tool data ────────────────────────────────────────────────────────────────
type Tool = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ElementType | (() => JSX.Element);
  color?: string;
};

type Category = {
  label: string;
  tools: Tool[];
};

const TOOL_CATEGORIES: Category[] = [
  {
    label: "Design",
    tools: [
      { name: "Figma",           icon: SiFigma,        color: "#F24E1E" },
      { name: "FigJam",          icon: FigJamIcon },
      { name: "Adobe XD",        icon: AdobeXdIcon },
      { name: "Photoshop",       icon: DiPhotoshop,    color: "#31A8FF" },
      { name: "Illustrator",     icon: DiIllustrator,  color: "#FF9A00" },
      { name: "Canva",           icon: CanvaIcon },
      { name: "Miro",            icon: SiMiro,         color: "#FFD02F" },
      { name: "Notion",          icon: SiNotion,       color: "#ffffff" },
    ],
  },
  {
    label: "Development",
    tools: [
      { name: "HTML5",           icon: SiHtml5,        color: "#E34F26" },
      { name: "CSS3",            icon: DiCss3,         color: "#1572B6" },
      { name: "JavaScript",      icon: SiJavascript,   color: "#F7DF1E" },
      { name: "TypeScript",      icon: SiTypescript,   color: "#3178C6" },
      { name: "React",           icon: SiReact,        color: "#61DAFB" },
      { name: "Next.js",         icon: SiNextdotjs,    color: "#ffffff" },
      { name: "Tailwind CSS",    icon: SiTailwindcss,  color: "#06B6D4" },
      { name: "Git",             icon: SiGit,          color: "#F05032" },
      { name: "GitHub",          icon: SiGithub,       color: "#ffffff" },
      { name: "VS Code",         icon: VscVscode,      color: "#007ACC" },
    ],
  },
  {
    label: "Platforms",
    tools: [
      { name: "LinkedIn",        icon: FaLinkedin,     color: "#0A66C2" },
      { name: "Behance",         icon: SiBehance,      color: "#1769FF" },
      { name: "Vercel",          icon: SiVercel,       color: "#ffffff" },
    ],
  },
];

// ─── Single tool card ─────────────────────────────────────────────────────────
const ToolCard = ({ tool }: { tool: Tool }) => {
  const Icon = tool.icon;
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl
                 bg-white/[0.03] border border-white/[0.07]
                 hover:bg-white/[0.07] hover:border-white/20
                 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)]
                 transition-all duration-[250ms] ease-out
                 cursor-default select-none
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-white/30 focus-visible:ring-offset-2
                 focus-visible:ring-offset-transparent"
      tabIndex={0}
      role="img"
      aria-label={tool.name}
    >
      {/* Logo */}
      <div
        className="flex items-center justify-center w-9 h-9 transition-transform duration-[250ms] group-hover:scale-105"
        aria-hidden="true"
      >
        {tool.color ? (
          // react-icons component — apply brand color
          <Icon
            style={{ color: tool.color }}
            className="w-7 h-7 drop-shadow-sm"
          />
        ) : (
          // Custom SVG wrapper (already has its own colors)
          <Icon />
        )}
      </div>

      {/* Name */}
      <span
        className="text-[11px] font-medium text-secondary/70 group-hover:text-secondary
                   text-center leading-tight tracking-wide transition-colors duration-[250ms]"
      >
        {tool.name}
      </span>
    </motion.div>
  );
};

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Category block ───────────────────────────────────────────────────────────
const CategoryBlock = ({ category }: { category: Category }) => (
  <motion.div
    variants={itemVariants}
    className="glass p-6 rounded-3xl hover:border-white/20 transition-all duration-500 group"
  >
    <Typography variant="small" className="mb-5 block text-accent-glow">
      {category.label}
    </Typography>
    {/*
      Responsive columns:
        mobile  2 cols
        sm      3 cols
        md      4 cols
        lg      5 cols
        xl      6 cols
    */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      {category.tools.map((tool) => (
        <ToolCard key={tool.name} tool={tool} />
      ))}
    </div>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden"
      aria-label="Tools & Skills"
    >
      {/* Ambient background decor — mirrors existing section style */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-accent-glow/[0.02] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Typography variant="small" className="mb-4 text-accent-glow">
              Tools &amp; Skills
            </Typography>
            <Typography variant="h2" className="mb-4">
              The stack behind <br />
              <span className="text-neutral-500">every design decision.</span>
            </Typography>
            <Typography variant="p" className="opacity-60 leading-relaxed">
              Official tools I use daily — from research and ideation through
              to handoff and deployment.
            </Typography>
          </div>
        </div>

        {/* Category blocks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {TOOL_CATEGORIES.map((cat) => (
            <CategoryBlock key={cat.label} category={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
