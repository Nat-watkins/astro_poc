// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://bcda.cms.gov',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ["node_modules/@uswds/uswds/packages"],
          quietDeps: true,
        }
      }
    },
  },

  integrations: [mdx()],
})