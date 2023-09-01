import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';
import envCompatible from 'vite-plugin-env-compatible';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig({
  // This changes the out put dir from dist to build
  plugins: [
    react(),
    tsconfigPaths(),
    // envCompatible(),
    // checker({
    //   typescript: true,
    // }),
    // svgrPlugin({
    //   svgrOptions: {
    //     icon: true,
    //     // ...svgr options (https://react-svgr.com/docs/options/)
    //   },
    // }),
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  server: {
    port: 3000,
  },
})
