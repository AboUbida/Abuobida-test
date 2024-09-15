import { defineConfig } from "astro/config";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [react()],
});
