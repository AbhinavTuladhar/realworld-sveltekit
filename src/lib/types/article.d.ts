import type { RegularUser } from './user';

export interface Article {
	author: RegularUser;
	createdAt: string;
	description: string;
	favorited: boolean;
	favoritesCount: number;
	slug: string;
	tagList: string[];
	title: string;
	updatedAt: string;
}

export interface ArticleDetail extends Article {
	body: string;
}
