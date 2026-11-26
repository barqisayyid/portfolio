// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// export default defineConfig({
//   // Ganti dengan domain asli saat sudah ada (dipakai untuk canonical & sitemap)
//   site: "http://localhost:4321",
//   integrations: [sitemap()],
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

// export default defineConfig({
//   site: "https://example.com",
//   integrations: [sitemap()],
//   build: {
//     inlineStylesheets: "always",
//   },
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

export default defineConfig({
  site: "https://barqilabs.my.id",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
    },
  },
});
