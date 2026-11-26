export const site = {
  name: "Sayyid Barqi Almukarrom Ramadhan",
  shortName: "Sayyid Barqi",
  title: "Sayyid Barqi — Creative Designer & Web Developer",
  description:
    "Portfolio Sayyid Barqi — Creative Designer & Web Developer. Selected works in web development, visual design, and UI/UX.",
  url: "https://example.com",
  email: "sayyidbarqi@example.com", // TODO: ganti email asli (PRD §17 Pending)
  whatsapp: "https://wa.me/6280000000000", // TODO
  socials: {
    linkedin: "https://linkedin.com", // TODO
    github: "https://github.com", // TODO
    instagram: "https://instagram.com", // TODO
  },
  /**
   * true  => <meta name="robots" content="noindex, nofollow"> aktif.
   * Ubah ke false HANYA setelah semua item PRD §17 terisi konten asli.
   */
  isStaging: true,
  nav: [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/experience" },
    { label: "Creative Works", href: "/#works" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
