<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const currentPath = $derived(page.url.pathname);

	const links = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Sign in',
			href: '/login'
		},
		{
			name: 'Sign up',
			href: '/register'
		}
	];

	const isAuthenticated = $derived(page.data.user !== null);
</script>

<header class="border-b border-gray-600">
	<div class="container flex items-center justify-between py-3">
		<h1 class="text-4xl">
			<a href={resolve('/')}> conduit </a>
		</h1>
		<nav>
			<ul class="flex gap-4">
				{#each links as link (link.href)}
					<li>
						<a
							class={['text-gray-500 duration-150', { 'text-white': currentPath === link.href }]}
							href={resolve(link.href)}>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
		{#if isAuthenticated}
			<p>Authenticated</p>
		{/if}
	</div>
</header>
