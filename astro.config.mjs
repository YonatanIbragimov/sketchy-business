import { defineConfig } from "astro/config";

// Static site: Vercel serves dist/ as plain files, no server needed.
export default defineConfig({
  site: "https://sketchy-business.vercel.app",
  trailingSlash: "ignore",
  build: { format: "directory" },
  markdown: { smartypants: true },
});
