import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      copyDtsFiles: true,
    }),
    tsconfigPaths()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: 'index',
      fileName: "index",
    },
    rollupOptions: {
      external: ['react','react-dom','@tanstack/react-table'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react','react-dom','@tanstack/react-table'],
    },
  },
});
