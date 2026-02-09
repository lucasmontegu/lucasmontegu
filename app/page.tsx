import { Navigation } from "@/components/navigation";
import { SocialLinks } from "@/components/social-links";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left column - sticky sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[480px] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {'Lucas Montegu'}
              </h1>
              <h2 className="mt-3 text-lg font-medium text-accent">
                Senior Frontend Developer
              </h2>
              <p className="mt-4 max-w-xs text-muted-foreground leading-relaxed">
                Front-end Engineer with 5+ years of experience building performant web products with React, TypeScript, and Next.js.
              </p>
              <div className="mt-12">
                <Navigation />
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <SocialLinks />
            </div>
          </header>

          {/* Right column - scrollable content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <div className="flex flex-col gap-24 lg:gap-36">
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
            </div>

            <footer className="mt-24 pb-12 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                Built with{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  Tailwind CSS
                </a>
                , deployed with{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  Vercel
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
