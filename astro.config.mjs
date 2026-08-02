// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Демо публикуется на GitHub Pages в подпапке репозитория.
// Для боевого домена: убрать base и заменить site.
export default defineConfig({
  site: 'https://manath-iq.github.io',
  base: '/clinic-template',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
