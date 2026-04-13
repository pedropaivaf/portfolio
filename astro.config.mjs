import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://pedropaivaferreira.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': ['*'],
      },
    }),
  ],
});
