import { defineConfig } from "astro/config";
import { partytown } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://anikeshk.com",
  integrations: [
    tailwind(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
});
