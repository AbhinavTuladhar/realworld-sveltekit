<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const { data, children } = $props();

	const {
		profile: { bio, image, username }
	} = $derived(data);

	const currentPath = $derived(page.url.pathname);

	const basePath = $derived(`/profile/${username}`);
	const favPath = $derived(`/profile/${username}/favourites`);
</script>

<section class="banner">
	<div class="small-container">
		<div class="image">
			<img
				src={image ||
					'https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg'}
				alt={username}
			/>
		</div>
		<h1 class="username">{username}</h1>
		<p class="bio">{bio}</p>
	</div>
</section>

<div class="medium-container">
	<ul class="article-links">
		<li>
			<a
				class={[
					'article-type-link',
					{
						active: currentPath === basePath
					}
				]}
				href={resolve(`/profile/${username}`)}
			>
				Articles
			</a>
		</li>
		<li>
			<a
				class={[
					'article-type-link',
					{
						active: currentPath === favPath
					}
				]}
				href={resolve(`/profile/${username}/favourites`)}
			>
				Favourited articles
			</a>
		</li>
	</ul>
</div>

<div class="medium-container">
	{@render children()}
</div>

<style>
	.banner {
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--border);
	}

	.banner .small-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image {
		width: 3rem;
		aspect-ratio: 1 / 1;
		overflow: hidden;
		border-radius: 50%;
	}

	.username {
		font-size: 2rem;
		font-weight: bold;
	}

	.bio {
		margin-top: 0.25rem;
		text-align: center;
		color: hsl(0, 0%, 80%);
	}

	.article-links {
		display: flex;
		width: 100%;
		margin-top: 2rem;
	}

	.article-type-link {
		display: inline-flex;
		padding: 1em;
		border-bottom: 2px solid var(--border);
	}

	.article-type-link.active {
		--active-colour: hsl(120, 50%, 50%);

		color: var(--active-colour);
		border-bottom-color: var(--active-colour);
		transition: all 0.2s ease-out;
	}

	.medium-container {
		max-width: 60rem;
		margin-inline: auto;
		padding-inline: 2rem;
	}
</style>
