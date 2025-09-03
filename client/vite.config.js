import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Modern SCSS: expose variables/mixins globally via @use
        additionalData: `@use "src/styles/_variables.scss" as *; 
        @use "src/styles/_mixins.scss" as *;`,
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
