import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const httpsUrl = z.string().url().startsWith("https://");

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: ({ image }) =>
    z.object({
      slug: z.string().regex(/^[a-z0-9-]+$/),
      title: z.string(),
      category: z.enum([
        "Web Application",
        "Dashboard System",
        "Information System",
        "Creative Design",
        "Landing Page",
        "Digital Experience",
      ]),
      year: z.union([z.string(), z.number()]),
      description: z.string(),
      thumbnail: image().optional(), // dummy project memakai mockup CSS dulu
      thumbnailAlt: z.string().optional(),
      technologies: z.array(z.string()),
      liveUrl: httpsUrl.optional(),
      githubUrl: httpsUrl.optional(),
      featured: z.boolean().default(false),
      overview: z.string(),
      challenge: z.string(),
      solution: z.string(),
      features: z.array(z.string()),
      gallery: z
        .array(z.object({ image: image(), alt: z.string() }))
        .default([]),
      isDummy: z.boolean().default(true), // penanda konten placeholder
    }),
});

const experiences = defineCollection({
  loader: file("src/data/experiences.json"),
  schema: z.object({
    organization: z.string(),
    position: z.string(),
    employmentType: z.enum([
      "Full-time",
      "Part-time",
      "Contract",
      "Internship",
      "Freelance",
      "Organization",
      "Volunteering",
    ]),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable().optional(),
    isCurrent: z.boolean().default(false),
    summary: z.string(),
    responsibilities: z.array(z.string()),
    skills: z.array(z.string()),
    relatedProjects: z.array(z.string()).optional(),
  }),
});

const creativeWorks = defineCollection({
  loader: file("src/data/creativeWorks.json"),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.union([z.string(), z.number()]),
    description: z.string(),
    // Mockup visual sementara (dipakai sampai gambar asli tersedia)
    mock: z.object({
      bg: z.string(),
      color: z.string(),
      top: z.string(),
      main: z.string(),
      bottom: z.string(),
    }),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { projects, experiences, creativeWorks };
