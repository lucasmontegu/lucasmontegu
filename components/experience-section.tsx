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
    period: "2023 — Present",
    title: "Full Stack Developer",
    company: "Flevo",
    companyUrl: "https://beflevo.com/",
    description:
      "Build and maintain critical UI components and frontend architecture. Lead the design system implementation and drive frontend best practices across the engineering team using SOLID principles and modern patterns.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    period: "2021 — 2023",
    title: "Frontend Developer",
    company: "Freelance",
    companyUrl: "#",
    description:
      "Delivered pixel-perfect, accessible web applications for startups and agencies. Specialized in React ecosystems, performance optimization, and responsive design for international clients.",
    technologies: ["React", "TypeScript", "Vue.js", "CSS", "Figma"],
  },
  {
    period: "2019 — 2021",
    title: "Web Developer",
    company: "Various Projects",
    companyUrl: "#",
    description:
      "Built full-stack web applications from concept to deployment. Focused on learning modern JavaScript frameworks, API design, and creating intuitive user experiences.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
  },
];

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <a
      href={item.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-1 rounded-lg p-4 -mx-4 transition-all duration-300 hover:bg-card/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:flex-row lg:gap-6"
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
          href="/resume.pdf"
          className="group inline-flex items-center gap-1 font-medium text-foreground hover:text-accent transition-colors duration-200"
        >
          View Full Resume
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
