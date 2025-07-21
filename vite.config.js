import { defineConfig } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wordle-sv/",
  plugins: [svelte({
    preprocess: vitePreprocess()
  })]
});
