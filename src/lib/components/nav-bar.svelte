<script>
	import { page } from '$app/stores';

	import BookButton from './book-button.svelte';
</script>

<nav>
	<a href="/">
		<p>Home</p>
	</a>
	{#if $page.route.id == '/'}
		<a href="#portfolio">
			<p>Portfolio</p>
		</a>
		<a href="#bio">
			<p>Bio</p>
		</a>
	{/if}
</nav>

<style>
	nav {
		background-color: rgb(255, 255, 255);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 20px;
		padding: 30px;
		transition: 300ms;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
		right: 0;
	}
</style>
