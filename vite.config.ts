import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "about-mfe",
      filename: "about-mfe-entry.js",
      shared: ["react"],
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
  base: "/about-mfe/",
});