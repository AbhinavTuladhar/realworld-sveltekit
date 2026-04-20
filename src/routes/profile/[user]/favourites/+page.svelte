<script lang="ts">
	import ArticlePreview from '$lib/components/ArticlePreview.svelte';

	const { data } = $props();

	const { favourites } = $derived(data);
</script>

<section class="articles-container">
	{#each favourites as article (article.slug)}
		<ArticlePreview {...article} />
	{/each}
</section>
