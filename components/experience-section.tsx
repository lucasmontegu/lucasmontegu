import { ArrowUpRight } from "lucide-react";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Aug 2024 — Present",
    title: "Senior Frontend Developer",
    company: "Tapi",
    companyUrl: "https://www.tapi.ai/",
    description:
      "Built an app from scratch for a business vertical as a product engineer, using Vibe Coding to achieve an MVP with Voice AI and payments. Implemented authentication, a dashboard, a payment portal, and Voice AI calls with a websocket server in conjunction with Elevenlabs. Expanded the team and migrated from Vercel to AWS to scale services.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Hono",
      "Node.js",
      "GenAI",
    ],
  },
  {
    period: "Dec 2022 — Aug 2024",
    title: "Senior Frontend Developer",
    company: "Flevo",
    companyUrl: "https://beflevo.com/",
    description:
      "Part of a small founding team making design decisions for the product. Created and improved two customer acquisition funnels using a form builder component based on JSON schema. Built the credit administration dashboard using Next.js, tRPC, and Zod. Optimized client-side table rendering, redesigned filters by query params for better UX.",
    technologies: [
      "Remix",
      "Next.js",
      "TypeScript",
      "tRPC",
      "Tailwind CSS",
      "shadcn/ui",
      "Zod",
    ],
  },
  {
    period: "Mar 2021 — Nov 2022",
    title: "Software Engineer",
    company: "DinoCloud",
    companyUrl: "https://www.dinocloud.co/",
    description:
      "Developed APIs with NestJS and serverless services with AWS Lambda, full screens with React and Redux, and mobile applications with Ionic. Participated in an MVP for a US logistics project using AWS Amplify and React.",
    technologies: [
      "React",
      "Redux",
      "NestJS",
      "AWS Lambda",
      "Ionic",
      "AWS Amplify",
    ],
  },
  {
    period: "Feb 2020 — Feb 2021",
    title: "Frontend Web Developer",
    company: "Clarika",
    companyUrl: "https://www.clarika.com/",
    description:
      "Developed frontend web applications with modern JavaScript frameworks, focusing on responsive design and clean code practices for client projects.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    period: "Mar 2019 — Feb 2020",
    title: "Frontend Web Developer",
    company: "25Watts",
    companyUrl: "https://www.25watts.com.ar/",
    description:
      "Built web interfaces and interactive experiences for various client projects, contributing to the full development lifecycle from design to deployment.",
    technologies: ["JavaScript", "React", "CSS", "HTML"],
  },
];

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <a
      href={item.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-1 rounded-lg p-4 -mx-4 transition-all duration-300 hover:bg-accent/5 hover:shadow-sm lg:flex-row lg:gap-6"
    >
      <div className="shrink-0 text-xs font-mono uppercase tracking-wide text-muted-foreground pt-1 lg:w-32">
        {item.period}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium leading-snug text-foreground">
          <span className="inline-flex items-baseline gap-1">
            {item.title} · {item.company}
            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {experiences.map((item) => (
          <ExperienceCard key={item.period} item={item} />
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://www.linkedin.com/in/lucasmontegu"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 font-medium text-foreground hover:text-accent transition-colors duration-200"
        >
          View Full LinkedIn Profile
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
