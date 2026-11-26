export const site = {
  name: "Sayyid Barqi Almukarrom Ramadhan",
  shortName: "Sayyid Barqi",
  title: "Sayyid Barqi — Creative Designer & Web Developer",
  description:
    "Portfolio Sayyid Barqi — Creative Designer & Web Developer. Selected works in web development, visual design, and UI/UX.",
  url: "https://barqilabs.my.id",
  email: "sayyidbarqi0911@gmail.com", 
  whatsapp: "https://wa.me/6282386365211", 
  socials: {
    linkedin:
      "https://www.linkedin.com/in/sayyid-barqi-almukarrom-ramadhan-62372632a/", 
    github: "https://github.com/barqisayyid/", 
    instagram: "https://instagram.com/barqisayyid/", 
  },
  /**
   * true  => <meta name="robots" content="noindex, nofollow"> aktif & robots.txt Disallow: /.
   * Otomatis true hanya pada Vercel Preview deployment agar URL preview tidak terindeks.
   */
  isStaging: import.meta.env.VERCEL_ENV === "preview",
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
