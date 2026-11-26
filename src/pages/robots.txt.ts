import type { APIRoute } from "astro";
import { site } from "../data/site";

export const GET: APIRoute = ({ site: siteUrl }) => {
  const body = site.isStaging
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", siteUrl).href}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
