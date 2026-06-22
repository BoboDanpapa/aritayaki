import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/aritayaki/",
  plugins: [react()],
  test: {
    environment: "jsdom"
  }
});
