<script lang="ts">
	const { data } = $props();

	const { bio, email, image, username } = $derived(data.user!);
</script>

<h1>Your settings</h1>
<div class="small-container">
	<form method="POST" action="?/update" class="user-form">
		<input type="text" name="username" value={username} />
		<input type="email" name="email" value={email} />
		<textarea rows="8" name="bio" value={bio}></textarea>
		<input type="text" name="image" value={image} />
		<input type="password" name="password" />
		<button class="submit-btn" type="submit">Submit</button>
	</form>

	<form class="logout-form" method="POST" action="?/logout">
		<button class="logout" type="submit"> Click here to logout</button>
	</form>
</div>

<style>
	h1 {
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
	}

	input,
	textarea {
		background: inherit;
		color: white;
	}

	.user-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.logout-form {
		padding-top: 1.5rem;
		margin-top: 1.5rem;
		border-top: 1px solid var(--border);
	}

	.logout {
		--red: hsl(0, 70%, 60%);
		--hover: hsl(0, 80%, 50%);

		padding: 0.5em 1em;
		border: 1px solid var(--red);
		color: var(--red);
		transition: all 0.3s ease-out;
		cursor: pointer;
		border-radius: 6px;
	}

	.logout:hover {
		background: var(--hover);
		border-color: var(--hover);
		color: white;
	}
</style>
