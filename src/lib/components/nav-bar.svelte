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
		<BookButton />
	{/if}
</nav>

<style>
	nav {
		background-color: rgb(255, 255, 255);
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		top: 0;
		width: 100%;
		left: 0;
		font-size: large;
		z-index: 10;
		gap: 20px;
		height: 10vh;
	}
</style>
