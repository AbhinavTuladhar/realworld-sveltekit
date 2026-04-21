<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Sign in</h1>
<a class="register" href={resolve('/register')}> Need an account? </a>

<form class="login-form small-container" method="POST" action="?/login">
	<input name="email" type="email" placeholder="Email" />
	<input name="password" type="password" placeholder="Password" />
	<button class="submit-btn" type="submit"> Submit </button>
</form>

<style>
	h1 {
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
	}

	.register {
		display: block;
		margin-top: 1rem;
		text-align: center;
		color: var(--blue);
	}

	.register:hover {
		text-decoration: underline;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	input {
		background: #16161d;
		color: white;
		border: none;
		border-bottom: 1px solid var(--border);
	}
</style>
