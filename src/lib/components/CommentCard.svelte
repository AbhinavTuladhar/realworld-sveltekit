<script lang="ts">
	import type { RegularUser } from '$lib/types';
	import { convertToStandardDate } from '$lib/utils/date.utils';

	interface CardProps {
		body: string;
		author: RegularUser;
		postDate: string;
	}

	let { author, body, postDate }: CardProps = $props();

	const realDate = $derived(convertToStandardDate(postDate));

	const { image, username } = $derived(author);
</script>

<article class="comment">
	<div class="body">
		{body}
	</div>
	<div class="footer">
		<div class="image">
			<img src={image} alt={username} />
		</div>
		<div class="meta-info">
			<span class="author">{username}</span>
			<span class="date">{realDate}</span>
		</div>
	</div>
</article>

<style>
	.comment {
		border: 1px solid var(--border);
		border-radius: 6px;
	}

	.body,
	.footer {
		padding: 1rem;
	}

	.footer {
		display: flex;
		align-items: center;
		gap: 1rem;
		border-top: 1px solid var(--border);
		background: hsl(0, 0%, 17.5%);
		border-radius: 0 0 6px 6px;
		font-size: 0.75rem;
	}

	.image {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		overflow: hidden;
	}
</style>
