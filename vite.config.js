import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5175,
    allowedHosts: ['weddingkezia.cahyo.site']
  },
  preview: {
    allowedHosts: ['weddingkezia.cahyo.site']
  },
  plugins: [react(), cloudflare()],
});