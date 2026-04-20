import { BASE_URL } from '$lib/api/api';
import type { Article, RegularUser } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
	const { user } = params;

	const [profile, writtenArticles, favouritedArticles] = await Promise.all([
		fetch(`${BASE_URL}/profiles/${user}`).then((res) => res.json()) as Promise<{
			profile: RegularUser;
		}>,
		fetch(`${BASE_URL}/articles?author=${user}`).then((res) => res.json()) as Promise<{
			articles: Article[];
		}>,
		fetch(`${BASE_URL}/articles?favorited=${user}`).then((res) => res.json()) as Promise<{
			articles: Article[];
		}>
	]);

	return {
		profile: profile.profile,
		articles: writtenArticles.articles,
		favourites: favouritedArticles.articles
	};
};

export const prerender = false;
