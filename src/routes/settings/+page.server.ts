import { BASE_URL } from '$lib/api/api';
import type { RegistrationResponse } from '$lib/types/user';
import { error, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.user) {
		redirect(302, '/login');
	}
};

export const actions: Actions = {
	logout: async ({ cookies, locals }) => {
		cookies.delete('jwt', { path: '/' });
		locals.user = null;
	},
	update: async ({ cookies, locals, request, fetch }) => {
		if (!locals.user) error(401, 'Unauthorized');

		const data = await request.formData();

		const requestBody = {
			user: {
				username: data.get('username'),
				email: data.get('email'),
				password: data.get('password'),
				image: data.get('image'),
				bio: data.get('bio')
			}
		};

		const response = await fetch(`${BASE_URL}/user`, {
			method: 'PUT',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${locals.user.token}`
			}
		});

		const userData = (await response.json()) as { user: RegistrationResponse };
		const value = btoa(JSON.stringify(userData.user));

		cookies.set('jwt', value, { path: '/' });

		locals.user = userData.user;
	}
} satisfies Actions;
