import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  projectId: import.meta.env
    ? import.meta.env.PUBLIC_SANITY_PROJECT_ID
    : process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env
    ? import.meta.env.PUBLIC_SANITY_DATASET
    : process.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool(), markdownSchema()],
  schema,
});
