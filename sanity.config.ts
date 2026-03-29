import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { deskStructure } from "./src/sanity/deskStructure";
import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Arina Zyryanova Portfolio",
  projectId: projectId || "missing-project-id",
  dataset: dataset || "production",
  basePath: "/studio",
  plugins: [structureTool({ structure: deskStructure })],
  schema: {
    types: schemaTypes,
  },
});
