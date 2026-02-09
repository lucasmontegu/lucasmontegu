import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/lucasmontegu",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/lucasmontegu",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/lucasmontegu",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:hello@lucasmontegu.com",
    icon: Mail,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5" aria-label="Social links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
