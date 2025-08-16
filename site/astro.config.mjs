// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://gregoryw3.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    playformCompress()
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          }
        }
      }
    }
  }
});