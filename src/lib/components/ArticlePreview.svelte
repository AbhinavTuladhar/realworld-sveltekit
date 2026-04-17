<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Article } from '$lib/types';

	const { author, createdAt, description, favoritesCount, slug, tagList, title }: Article =
		$props();
</script>

<article>
	<div class="top-row">
		<div class="image">
			<img src={author.image} alt={author.username} />
		</div>
		<div class="author-date">
			<span class="author">{author.username}</span>
			<span class="date">{createdAt}</span>
		</div>
		<button class="favourite">
			<span class="heart">❤️</span>
			<span class="count">{favoritesCount}</span>
		</button>
	</div>
	<h2 class="title">
		<a href={resolve(`/article/${slug}`)}>{title}</a>
	</h2>
	<p class="description">
		{description}
	</p>
	<ul class="tags-list">
		{#each tagList as tag (tag)}
			<li class="tag-capsule">{tag}</li>
		{/each}
	</ul>
</article>

<style lang="scss">
	article {
		position: relative;
		padding-block: 1.5rem;
	}

	article:not(:last-child) {
		border-bottom: 1px solid var(--border);
	}

	.top-row {
		display: flex;
		gap: 0.5rem;
	}

	.image {
		aspect-ratio: 1 / 1;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		overflow: hidden;
	}

	.author-date {
		display: flex;
		flex-direction: column;
	}

	.favourite {
		margin-left: auto;
		border: 1px solid hsl(90, 50%, 50%);
		align-self: flex-start;
		padding: 0.25em 0.5em;
		border-radius: 12px;
		transition: all 0.4s ease-out;
		cursor: pointer;
	}

	.favourite .count {
		mix-blend-mode: difference;
	}

	.favourite:hover {
		background-color: hsl(90, 50%, 50%);
	}

	.title {
		margin-top: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
		line-height: 1.2;
	}

	.description {
		color: hsl(0, 0%, 65%);
	}

	.tags-list {
		gap: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		margin-left: auto;
		max-width: 50%;
		margin-top: 1rem;
		justify-content: flex-end;
	}
</style>
