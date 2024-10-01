// @ts-check
import { loadEnv } from "vite";

import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? "",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2024-07-24",
      studioBasePath: "/studio",
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
