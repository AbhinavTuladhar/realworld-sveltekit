import { BASE_URL } from '$lib/api/api.js';
import type { Article } from '$lib/types/article.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const [articles, tags] = await Promise.all([
		fetch(`${BASE_URL}/articles`).then((res) => res.json()) as Promise<{ articles: Article[] }>,
		fetch(`${BASE_URL}/tags`).then((res) => res.json()) as Promise<{ tags: string[] }>
	]);

	return {
		data: {
			articles: articles.articles,
			tags: tags.tags
		}
	};
};
