import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5175,
    allowedHosts: ['weddingkezia.cahyo.site']
  },
  preview: {
    allowedHosts: ['weddingkezia.cahyo.site']
  },
  plugins: [react()],
});
