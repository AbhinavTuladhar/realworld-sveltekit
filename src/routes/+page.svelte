<script lang="ts">
	import ArticlePreview from '$lib/components/ArticlePreview.svelte';

	const { data } = $props();

	const {
		data: { articles, tags }
	} = $derived(data);
</script>

<div class="main-grid">
	<section class="articles-container">
		{#each articles as article (article.slug)}
			<ArticlePreview {...article} />
		{/each}
	</section>
	<aside class="tags-container">
		{#each tags as tag (tag)}
			<span class="tag-capsule"> {tag} </span>
		{/each}
	</aside>
</div>

<style>
	.main-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 20rem;
	}

	.articles-container {
		border-right: 1px solid var(--border);
		padding-right: 1.5rem;
	}
	.tags-container {
		align-self: flex-start;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding-left: 2rem;
	}
	:global {
		.tag-capsule {
			display: inline-flex;
			align-items: center;
			padding: 0.25em 1em;
			border: 1px solid var(--border);
			border-radius: 100vw;
			font-size: 0.875rem;
			line-height: 1;
		}
	}
</style>
