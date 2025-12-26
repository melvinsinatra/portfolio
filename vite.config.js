import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  base: process.env.BASE_PATH || '/'
};
