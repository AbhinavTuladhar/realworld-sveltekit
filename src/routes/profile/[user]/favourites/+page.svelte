<script lang="ts">
	import ArticleList from '$lib/components/ArticleList.svelte';

	const { data } = $props();

	const { favourites } = $derived(data);
</script>

<ArticleList articleList={favourites} />
