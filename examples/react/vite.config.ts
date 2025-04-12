import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tanstack-table-aop/react": path.resolve(
        __dirname,
        "../../packages/react/src/index.tsx"
      ),
    },
  },
});
