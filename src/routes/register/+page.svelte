<script lang="ts">
	let username = $state('');
	let email = $state('');
	let password = $state('');
</script>

<div class="container">
	<h1>Sign Up</h1>

	<form method="POST" action="?/register">
		<input name="username" type="text" bind:value={username} placeholder="User name" />
		<input name="email" type="email" bind:value={email} placeholder="Email" />
		<input name="password" type="password" bind:value={password} placeholder="User Password" />
		<button class="submit-btn" type="submit"> Submit </button>
	</form>
</div>

<style>
	h1 {
		font-size: 2rem;
		font-weight: bold;
	}

	.container {
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 1.5rem;
		max-width: 30rem;
		margin-inline: auto;
	}

	input {
		background: #16161d;
		color: white;
		border: none;
		border-bottom: 1px solid var(--border);
	}
</style>
