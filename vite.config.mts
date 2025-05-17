import path from 'path';
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  environments: {
    ssr: {},
  },
  plugins: [redwood(), tailwindcss()],
});
