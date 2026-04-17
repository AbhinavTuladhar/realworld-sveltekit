import type { Article } from '$lib/types';
import { BASE_URL } from './api';

class ArticleService {
	static async getArticles() {
		const response = await fetch(`${BASE_URL}/articles`);
		if (!response.ok) {
			throw new Error('Failed to fetch articles');
		}
		return (await response.json()) as Article[];
	}
}

export default ArticleService;
