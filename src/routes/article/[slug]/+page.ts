import { BASE_URL } from '$lib/api/api';
import type { ArticleDetail } from '$lib/types/article';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;

	const response = await fetch(`${BASE_URL}/articles/${slug}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch article with slug: ${slug}`);
	}

	const data = (await response.json()) as { article: ArticleDetail };
	return { data };
};
