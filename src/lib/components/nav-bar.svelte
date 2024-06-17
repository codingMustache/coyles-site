<script>
	import BookButton from './book-button.svelte';
</script>

<nav>
	<a href="/">
		<p>Home</p>
	</a>
	<a href="#portfolio">
		<p>Portfolio</p>
	</a>
	<a href="#bio">
		<p>Bio</p>
	</a>
	<BookButton />
</nav>

<style>
	nav {
		background-color: rgb(255, 255, 255);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 20px;
		padding: 0 20px;
		height: 10vh;
		transition: 300ms;
	}
</style>
