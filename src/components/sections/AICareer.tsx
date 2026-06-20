"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

type ExpertiseLevel = "beginner" | "medium" | "advanced";

interface AiSkill {
  name: string;
  icon: string;
  level: ExpertiseLevel;
  description: string;
}

interface AiPhase {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  gradient: string;
  glowColor: string;
  skills: AiSkill[];
}

const AI_PHASES: AiPhase[] = [
  {
    id: 1,
    title: "Cloud & Deployment",
    subtitle: "Infrastructure for AI Applications",
    emoji: "☁️",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    glowColor: "rgba(59, 130, 246, 0.4)",
    skills: [
      {
        name: "AWS",
        icon: "🟠",
        level: "medium",
        description: "EC2, S3, Lambda, API Gateway for scalable cloud infrastructure",
      },
      {
        name: "Azure",
        icon: "🔵",
        level: "medium",
        description: "Azure OpenAI Service, Cognitive Services, App Service",
      },
      {
        name: "Vercel",
        icon: "▲",
        level: "medium",
        description: "AI-powered edge deployments, Next.js hosting, serverless functions",
      },
    ],
  },
  {
    id: 2,
    title: "LLMs & AI Tooling",
    subtitle: "Leveraging AI for Developer Productivity",
    emoji: "🤖",
    gradient: "from-brand-primary/20 via-brand-secondary/10 to-transparent",
    glowColor: "rgba(101, 0, 255, 0.45)",
    skills: [
      {
        name: "Generative AI",
        icon: "✨",
        level: "medium",
        description: "Building generative solutions using LLMs, image, and text models",
      },
      {
        name: "Prompt Engineering",
        icon: "🧠",
        level: "medium",
        description: "Crafting precise prompts for chain-of-thought reasoning and output control",
      },
      {
        name: "GitHub Copilot",
        icon: "🐙",
        level: "medium",
        description: "AI pair programming for code suggestions, refactoring, and documentation",
      },
      {
        name: "Codex",
        icon: "⚡",
        level: "medium",
        description: "OpenAI Codex for natural-language-to-code translation and automation",
      },
      {
        name: "Claude Code",
        icon: "🔮",
        level: "medium",
        description: "Anthropic Claude for complex reasoning, code review, and analysis tasks",
      },
    ],
  },
  {
    id: 3,
    title: "Agentic & RAG Systems",
    subtitle: "Next-Gen Cognitive Architectures",
    emoji: "🧬",
    gradient: "from-brand-secondary/20 via-brand-accent/10 to-transparent",
    glowColor: "rgba(255, 0, 255, 0.4)",
    skills: [
      {
        name: "Agentic AI",
        icon: "🕹️",
        level: "medium",
        description: "Building autonomous AI agents that plan, reason, and take actions",
      },
      {
        name: "RAG",
        icon: "📚",
        level: "medium",
        description: "Retrieval-Augmented Generation for context-aware, grounded AI responses",
      },
    ],
  },
];

// ─── Expertise Level Configuration ────────────────────────────────────────────

const LEVEL_CONFIG: Record<
  ExpertiseLevel,
  { label: string; color: string; bgColor: string; barWidth: string; dots: number }
> = {
  beginner:  { label: "Beginner",  color: "text-emerald-400",  bgColor: "bg-emerald-400/20 border-emerald-400/40",  barWidth: "33%",  dots: 1 },
  medium:    { label: "Medium",    color: "text-yellow-400",   bgColor: "bg-yellow-400/20 border-yellow-400/40",    barWidth: "66%",  dots: 2 },
  advanced:  { label: "Advanced",  color: "text-brand-primary", bgColor: "bg-brand-primary/20 border-brand-primary/40", barWidth: "100%", dots: 3 },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExpertiseDots({ level }: { level: ExpertiseLevel }) {
  const { dots, color } = LEVEL_CONFIG[level];
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all ${
            i <= dots ? `${color.replace("text-", "bg-")} shadow-[0_0_6px_currentColor]` : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}

function SkillBadge({ skill, index }: { skill: AiSkill; index: number }) {
  const cfg = LEVEL_CONFIG[skill.level];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="group relative bg-bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-brand-primary/40 transition-all duration-300 overflow-hidden cursor-default"
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-secondary/0 group-hover:from-brand-primary/5 group-hover:to-brand-secondary/5 transition-all duration-500 rounded-2xl" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      <div className="relative flex items-start gap-3">
        {/* Icon */}
        <span className="text-2xl flex-shrink-0 mt-0.5">{skill.icon}</span>

        <div className="flex-1 min-w-0">
          {/* Name + level badge */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="font-bold text-text-primary text-sm leading-tight">{skill.name}</h4>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border flex-shrink-0 ${cfg.color} ${cfg.bgColor}`}
            >
              {cfg.label}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-text-secondary leading-relaxed mb-3">{skill.description}</p>

          {/* Expertise bar */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: cfg.barWidth }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.06, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"
              />
            </div>
            <ExpertiseDots level={skill.level} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PhaseCard({ phase, index }: { phase: AiPhase; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20">
      {/* Timeline dot (desktop center) */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-20 flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="relative"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl z-10 relative bg-bg-card border-2 border-brand-primary shadow-xl"
            style={{ boxShadow: `0 0 20px ${phase.glowColor}, 0 0 40px ${phase.glowColor}40` }}
          >
            {phase.emoji}
          </div>
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-brand-primary/50"
          />
        </motion.div>
        <div className="w-px flex-1 mt-2 bg-gradient-to-b from-brand-primary/40 to-transparent min-h-[3rem]" />
      </div>

      {/* Content side (alternates left/right on desktop) */}
      <div className={`lg:col-span-1 ${isEven ? "lg:col-start-1" : "lg:col-start-2"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`relative rounded-3xl p-6 bg-bg-card/60 backdrop-blur-sm border border-border shadow-lg overflow-hidden`}
          style={{ boxShadow: `0 8px 32px ${phase.glowColor}30` }}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} pointer-events-none`} />

          {/* Mobile-only dot */}
          <div className="flex lg:hidden items-center gap-3 mb-4">
            <span className="text-3xl">{phase.emoji}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-brand-primary/40 to-transparent" />
          </div>

          {/* Phase label */}
          <div className="relative mb-1">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
              Phase {phase.id}
            </span>
          </div>

          {/* Title */}
          <h3 className="relative text-xl md:text-2xl font-bold text-text-primary mb-1 font-display">
            {phase.title}
          </h3>
          <p className="relative text-sm text-text-secondary mb-5">{phase.subtitle}</p>

          {/* Skills grid */}
          <div className="relative space-y-3">
            {phase.skills.map((skill, i) => (
              <SkillBadge key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Ambient Background ───────────────────────────────────────────────────────

function AmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Rotating large orb top-left */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(101,0,255,0.15), rgba(255,0,255,0.08), rgba(255,107,53,0.06), rgba(101,0,255,0.15))",
          filter: "blur(60px)",
        }}
      />
      {/* Static glow bottom-right */}
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,255,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      {/* Center faint accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(101,0,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}

// ─── Floating particles ───────────────────────────────────────────────────────

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 6,
  delay: Math.random() * 4,
}));

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-primary/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function AICareer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax shift for the connector line
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section
      id="ai-career"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-bg-primary"
    >
      <AmbientBackground />
      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🤖
            </motion.span>
            AI Career Journey
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold font-display mb-4">
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6500FF 0%, #FF00FF 50%, #FF6B35 100%)",
              }}
            >
              AI Career Path
            </span>
          </h2>

          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            From cloud infrastructure to cutting-edge agentic AI systems — here is my journey into
            the world of Artificial Intelligence, step by step.
          </p>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6 h-1 w-32 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, #6500FF, #FF00FF, #FF6B35)",
              transformOrigin: "center",
            }}
          />
        </motion.div>

        {/* ── Expertise Legend ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {(Object.entries(LEVEL_CONFIG) as [ExpertiseLevel, typeof LEVEL_CONFIG[ExpertiseLevel]][]).map(
            ([key, cfg]) => (
              <div
                key={key}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold ${cfg.color} ${cfg.bgColor}`}
              >
                <ExpertiseDots level={key} />
                <span>{cfg.label}</span>
              </div>
            )
          )}
        </motion.div>

        {/* ── Timeline Wrapper ── */}
        <div className="relative">
          {/* Animated vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border/40">
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-full"
              style={{
                height: lineHeight,
                background:
                  "linear-gradient(180deg, #6500FF, #FF00FF, #FF6B35)",
                boxShadow: "0 0 8px rgba(101,0,255,0.6)",
              }}
            />
          </div>

          {/* Phase Cards */}
          {AI_PHASES.map((phase, i) => (
            <PhaseCard key={phase.id} phase={phase} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-4 rounded-3xl p-8 md:p-12 text-center overflow-hidden border border-brand-primary/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(101,0,255,0.08) 0%, rgba(255,0,255,0.06) 50%, rgba(255,107,53,0.04) 100%)",
          }}
        >
          <div className="absolute inset-0 bg-bg-card/50 backdrop-blur-sm rounded-3xl" />
          <div className="relative">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">
              Continuously{" "}
              <span className="text-brand-primary">Learning & Growing</span>
            </h3>
            <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              AI is evolving at lightning speed. I am committed to staying ahead by continuously
              exploring new tools, frameworks, and paradigms in the Generative AI ecosystem.
            </p>
          </div>

          {/* Corner sparkles */}
          {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos) => (
            <motion.div
              key={pos}
              className={`absolute ${pos} text-brand-primary/40 text-xl`}
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
            >
              ✦
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
