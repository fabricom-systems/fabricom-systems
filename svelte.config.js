import adapter from '@sveltejs/adapter-static'; // <--- Mude para static
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// fallback: '404.html' garante que rotas dinâmicas não quebrem no refresh
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/fabricom-systems' : '',
        }
        
	}
};

export default config;