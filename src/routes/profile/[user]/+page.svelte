<script lang="ts">
	import ArticleList from '$lib/components/ArticleList.svelte';

	const { data } = $props();

	const { articles } = $derived(data);
</script>

<ArticleList articleList={articles} />
