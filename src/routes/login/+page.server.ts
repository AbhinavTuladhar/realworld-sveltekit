import { BASE_URL } from '$lib/api/api';
import type { RegistrationResponse } from '$lib/types/user';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ cookies, fetch, request }) => {
		const data = await request.formData();

		const requestBody = {
			user: {
				email: data.get('email'),
				password: data.get('password')
			}
		};

		const response = await fetch(`${BASE_URL}/users/login`, {
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		const userData = (await response.json()) as { user: RegistrationResponse };
		const value = btoa(JSON.stringify(userData.user));

		cookies.set('jwt', value, { path: '/' });
		redirect(303, '/');
	}
} satisfies Actions;
