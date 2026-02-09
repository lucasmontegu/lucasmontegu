export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        About
      </h2>
      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground leading-relaxed">
          Front-end Engineer with over 5 years of experience. Proficient in
          problem analysis and passionate about continuously learning new
          technologies like Next.js, GraphQL, AWS, Tailwind, and Remix. I enjoy
          building products from scratch, including Voice AI integrations,
          payment portals, and scalable dashboards.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Currently, I'm a Senior Frontend Developer at{" "}
          <a
            href="https://www.tapi.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-accent transition-colors duration-200"
          >
            Tapi
          </a>
          , where I built an app from scratch for a business vertical as a
          product engineer, using Vibe Coding to achieve an MVP with Voice AI
          and payments.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {"When I'm not coding, you'll find me traveling as a digital nomad, trekking through new landscapes, or discovering new cultures. I'm passionate about physical activity and have a particular fondness for vegan/vegetarian cuisine."}
        </p>
      </div>
    </section>
  );
}
