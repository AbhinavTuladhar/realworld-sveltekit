import type { RegularUser } from './user';

export interface Comment {
	id: number;
	createdAt: string;
	updatedAt: string;
	body: string;
	author: RegularUser;
}
