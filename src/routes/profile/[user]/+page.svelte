<script lang="ts">
	import ArticlePreview from '$lib/components/ArticlePreview.svelte';

	const { data } = $props();

	const { articles } = $derived(data);
</script>

<ul>
	{#each articles as article (article.slug)}
		<ArticlePreview {...article} />
	{/each}
</ul>
