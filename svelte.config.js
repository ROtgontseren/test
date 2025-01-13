import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(), // Vercel-д зориулсан адаптер
		// Optional: additional settings
		files: {
			assets: 'public' // статик файлуудыг хадгалах байрлал
		}
	}
};

export default config;