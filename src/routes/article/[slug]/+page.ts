import { BASE_URL } from '$lib/api/api';
import type { Comment } from '$lib/types';
import type { ArticleDetail } from '$lib/types/article';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;

	const [detail, comments] = await Promise.all([
		fetch(`${BASE_URL}/articles/${slug}`).then((res) => res.json()) as Promise<{
			article: ArticleDetail;
		}>,
		fetch(`${BASE_URL}/articles/${slug}/comments`).then((res) => res.json()) as Promise<{
			comments: Comment[];
		}>
	]);

	return {
		article: detail.article,
		comments: comments.comments
	};

	// const response = await fetch(`${BASE_URL}/articles/${slug}`);
	// if (!response.ok) {
	// 	throw new Error(`Failed to fetch article with slug: ${slug}`);
	// }

	// const data = (await response.json()) as { article: ArticleDetail };
	// return { data };
};
