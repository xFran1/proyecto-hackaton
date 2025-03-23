/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,accordion.js}'],
    theme: {
      extend: {},
    },
    plugins: [
      require("flyonui"),
      require("flyonui/plugin")
    ],
  };