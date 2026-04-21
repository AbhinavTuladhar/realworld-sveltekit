import { BASE_URL } from '$lib/api/api';
import type { RegistrationResponse } from '$lib/types/user';
import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();

	return user;
};

export const actions: Actions = {
	register: async ({ request, fetch, cookies }) => {
		const data = await request.formData();

		const requestBody = {
			user: {
				username: data.get('username'),
				email: data.get('email'),
				password: data.get('password')
			}
		};

		const response = await fetch(`${BASE_URL}/users`, {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const userData = (await response.json()) as { user: RegistrationResponse };
		const value = btoa(JSON.stringify(userData.user));
		cookies.set('jwt', value, { path: '/' });
	}
} satisfies Actions;
