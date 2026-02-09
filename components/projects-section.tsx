import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  linkLabel: string;
}

const projects: ProjectItem[] = [
  {
    title: "Flevo Platform",
    description:
      "A comprehensive web platform built with modern frontend architecture, focusing on performance, accessibility, and scalable component design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    href: "https://beflevo.com/",
    linkLabel: "beflevo.com",
  },
  {
    title: "Component Library",
    description:
      "A reusable, design-system-driven component library built with SOLID principles. Includes primitives for forms, layout, navigation, and data display.",
    technologies: ["React", "Storybook", "TypeScript", "CSS Modules"],
    href: "https://github.com/lucasmontegu",
    linkLabel: "GitHub",
  },
  {
    title: "Portfolio v2",
    description:
      "This personal site, built as a minimal dark-themed portfolio. Features smooth scrolling, responsive layout, and performant animations.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/lucasmontegu/lucasmontegu",
    linkLabel: "Source",
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-1 rounded-lg p-4 -mx-4 transition-all duration-300 hover:bg-card/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-medium leading-snug text-foreground">
          <span className="inline-flex items-baseline gap-1">
            {project.title}
            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground font-mono">
            {project.linkLabel}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.technologies.map((tech) => (
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

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        Projects
      </h2>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
