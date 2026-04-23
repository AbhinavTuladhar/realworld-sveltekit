<script lang="ts">
	import type { Article } from '$lib/types';
	import ArticlePreview from './ArticlePreview.svelte';

	interface Props {
		articleList: Article[];
	}

	let { articleList }: Props = $props();
</script>

{#if articleList.length > 0}
	<div class="article-list">
		{#each articleList as article (article.slug)}
			<ArticlePreview {...article} />
		{/each}
	</div>
{:else}
	<p class="no-articles">No articles found</p>
{/if}

<style>
	.no-articles {
		text-align: center;
		margin-top: 2rem;
	}
</style>
