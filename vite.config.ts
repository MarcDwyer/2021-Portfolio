import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

const baseConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
};

const development = () => ({
  ...baseConfig,
  server: {
    host: "localhost",
    port: 3000,
  },
});

const production = () => ({
  ...baseConfig,
});
export default defineConfig(({ command }) => {
  return command === "serve" ? development() : production();
});
