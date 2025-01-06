import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: 'src/pages',
      routeTreeFileHeader: [
        '/* eslint-disable perfectionist/sort-imports, object-shorthand, ts/no-redeclare */',
        '// noinspection JSUnusedGlobalSymbols',
      ],
      semicolons: true,
      routeToken: 'layout',
      autoCodeSplitting: true,
    }),
    react(),
    Unfonts({
      google: {
        families: ['Inter'],
      },
    }),
    tsconfigPaths(),
  ],
});
