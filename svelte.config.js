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
        
        // SE o seu repositório NÃO for "seu-usuario.github.io" (raiz),
        // e for algo como "github.com/fabricom/site-windows",
        // você precisa descomentar e ajustar as linhas abaixo:
        /*
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/nome-do-repositorio' : '',
        }
        */
	}
};

export default config;