export const site = {
  name: "Sayyid Barqi Almukarrom Ramadhan",
  shortName: "Sayyid Barqi",
  title: "Sayyid Barqi — Creative Designer & Web Developer",
  description:
    "Portfolio Sayyid Barqi — Creative Designer & Web Developer. Selected works in web development, visual design, and UI/UX.",
  url: "https://barqilabs.my.id",
  email: "sayyidbarqi@gmail.com", // TODO: ganti email asli (PRD §17 Pending)
  whatsapp: "https://wa.me/6282386365211", // TODO
  socials: {
    linkedin:
      "https://www.linkedin.com/in/sayyid-barqi-almukarrom-ramadhan-62372632a/", // TODO
    github: "https://github.com/barqisayyid/", // TODO
    instagram: "https://instagram.com/barqisayyid/", // TODO
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
    // { label: "Creative Works", href: "/#works" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
