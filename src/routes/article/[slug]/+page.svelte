<script lang="ts">
	let { data } = $props();

	let {
		data: {
			article: {
				author: { username, image },
				createdAt,
				description,
				favoritesCount,
				slug,
				tagList,
				title,
				body,
				favorited,
				updatedAt
			}
		}
	} = $derived(data);

	const formatted = $derived(
		new Date(createdAt).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<section class="banner">
	<div class="small-container">
		<h1>{title}</h1>
		<div class="first-row">
			<div class="author">
				<div class="image">
					<img src={image} alt={username} />
				</div>
				<div class="author-info">
					<span class="username">{username}</span>
					<span class="date">{formatted}</span>
				</div>
			</div>
			<button class="favourite-btn">
				<span class="heart">❤️</span>
				<span class="count"> Favourite article ({favoritesCount})</span>
			</button>
		</div>
	</div>
</section>

<section class="main-content small-container">
	<div class="body">
		{body}
	</div>

	<ul class="tags-list">
		{#each tagList as tag (tag)}
			<li class="tag-capsule">{tag}</li>
		{/each}
	</ul>
</section>

<style>
	.banner {
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--border);
	}

	h1 {
		font-size: 2.25rem;
		font-weight: 600;
	}

	.first-row {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.author {
		display: flex;
		gap: 0.5rem;
	}

	.author-info {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.image {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		overflow: hidden;
	}

	.date {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: hsl(0, 0%, 50%);
	}

	.favourite-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5em 0.75em;
		border-radius: 0.5rem;
		border: 1px solid hsl(90, 50%, 40%);
		transition: all 0.3s ease-out;
		cursor: pointer;
	}

	.favourite-btn .count {
		font-size: 0.875rem;
	}

	.favourite-btn:hover {
		background-color: hsl(90, 50%, 40%);
	}

	.body {
		margin-top: 3rem;
	}

	.tags-list {
		display: flex;
		gap: 0.5rem;
		margin-top: 2rem;
	}
</style>
