import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import netlify from "@astrojs/netlify";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), react(), markdoc(), keystatic()],
  output: "server",
  adapter: netlify(),
});
