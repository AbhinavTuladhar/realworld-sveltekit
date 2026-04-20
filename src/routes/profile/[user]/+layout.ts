import { BASE_URL } from '$lib/api/api';
import type { Article, RegularUser } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
	const { user } = params;

	const [profile, articles] = await Promise.all([
		fetch(`${BASE_URL}/profiles/${user}`).then((res) => res.json()) as Promise<{
			profile: RegularUser;
		}>,
		fetch(`${BASE_URL}/articles?author=${user}`).then((res) => res.json()) as Promise<{
			articles: Article[];
		}>
	]);

	return {
		profile: profile.profile,
		articles: articles.articles
	};

	// const response = await fetch(`${BASE_URL}/profiles/${user}`);
	// if (!response.ok) {
	// 	throw new Error(`Failed to fetch profile for user: ${user}`);
	// }
	// const data = (await response.json()) as { profile: RegularUser };
	// return data;
};

export const prerender = false;
