import { BASE_URL } from '$lib/api/api.js';
import type { Article } from '$lib/types/article.js';

export async function load({ fetch }) {
	const response = await fetch(`${BASE_URL}/articles`);
	if (response.ok) {
		const data = (await response.json()) as Article[];
		return { data };
	}

	return { data: null };
}
