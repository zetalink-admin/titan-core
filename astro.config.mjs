import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpine from '@astrojs/alpinejs';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    alpine({
      // Initialize Alpine.js on page load
      entrypoint: '/src/alpine.js'
    })
  ]
});