import { error } from '@sveltejs/kit';

type PageParams = {
    slug: string
}

export async function load({ params } : {params: PageParams}) {
	try {
        console.log("SLUG: ", params.slug);
		// Importação dinâmica do arquivo MD baseado no slug da URL
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, 'Post não encontrado');
	}
}