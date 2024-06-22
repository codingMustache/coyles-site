<script>
	import { inject } from '@vercel/analytics';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import NavBar from '$lib/components/nav-bar.svelte';
	import BookButton from '$lib/components/book-button.svelte';
	inject();
</script>

<NavBar />

<div class="book-btn">
	<BookButton />
</div>
<slot />

<style>
	.book-btn {
		position: fixed;
		top: 95%;
		right: 5%;
		z-index: 10;
	}
</style>
