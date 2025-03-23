// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Importa la integración de Astro para Tailwind

// https://astro.build/config
export default defineConfig({
  vite: {
    assetsInclude: ["**/*.jpg","**/*.jpeg", "**/*.png", "**/*.svg"],
  },
  integrations: [tailwind()], // Añade la integración en la sección correcta,
  devToolbar: {
    enabled: false
  }
});