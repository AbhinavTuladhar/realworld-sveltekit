<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const currentPath = $derived(page.url.pathname);

	const user = $derived(page.data.user);

	const isAuthenticated = $derived(user !== null);
</script>

<header class="header border-b border-gray-600">
	<div class="container flex items-center justify-between py-3">
		<h1 class="text-4xl">
			<a href={resolve('/')}> conduit </a>
		</h1>
		<nav>
			<ul>
				<li>
					<a class:active={currentPath === resolve('/')} href={resolve('/')}> Home </a>
				</li>
				{#if isAuthenticated}
					<li>
						<a
							class:active={currentPath === resolve(`/profile/${user.username}`)}
							href={resolve(`/profile/${user.username}`)}>Profile</a
						>
					</li>
					<li>
						<a class:active={currentPath === resolve('/settings')} href={resolve('/settings')}
							>Settings</a
						>
					</li>
				{:else}
					<li>
						<a class:active={currentPath === resolve('/register')} href={resolve('/register')}>
							Sign up</a
						>
					</li>
					<li>
						<a class:active={currentPath === resolve('/login')} href={resolve('/login')}>
							Sign in</a
						>
					</li>
				{/if}
			</ul>
		</nav>
	</div>
</header>

<style>
	header ul {
		display: flex;
		gap: 1rem;
	}

	header a {
		color: hsl(220, 10%, 46%);
		transition: all 0.2s ease-out;
	}

	header a.active {
		color: hsl(220, 10%, 86%);
	}
</style>
