import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import compress from '@playform/compress';

export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  vite: {
    plugins: [
      tailwindcss(), // <-- Comma was missing here
      compress(),
      // ... other plugins
    ],
  },
});
