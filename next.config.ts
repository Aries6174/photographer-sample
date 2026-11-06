import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to `out/`.
// No server is needed, so it can be hosted anywhere (Vercel, Netlify, GitHub Pages).
const nextConfig: NextConfig = {
  output: "export",
  // The image optimizer needs a server, so a static export serves images as-is.
  // The photos in public/images are already resized WebP files.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
