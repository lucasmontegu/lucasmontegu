export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        About
      </h2>
      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          I'm a developer passionate about crafting polished, high-performance
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that look great and are built for scale.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Currently, I'm a Full Stack Developer at{" "}
          <a
            href="https://beflevo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-accent transition-colors duration-200"
          >
            Flevo
          </a>
          , specializing in front-end architecture. I build and maintain the
          component systems and interfaces that power the product, focusing on
          SOLID principles and modern frontend patterns.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When I'm not coding, you'll find me traveling as a digital nomad,
          learning to skateboard, or chasing waves with a surfboard. I believe
          the best interfaces are built by people who are curious about the world
          beyond the screen.
        </p>
      </div>
    </section>
  );
}
