export type ExpertiseLevel = "beginner" | "medium" | "advanced";

export interface AiSkill {
  name: string;
  icon: string;
  level: ExpertiseLevel;
  description: string;
}

export interface AiPhase {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  gradient: string;
  glowColor: string;
  skills: AiSkill[];
}

export const AI_PHASES: AiPhase[] = [
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
