import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'; // catches type errors in development - super useful
import svgrPlugin from 'vite-plugin-svgr'; // allows us to import svg files as react components; very flexible
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig({
  // This changes the out put dir from dist to build
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  server: {
    port: 3000,
  },
})
