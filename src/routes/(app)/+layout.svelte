<script>
	import { inject } from '@vercel/analytics';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import NavBar from '$lib/components/nav-bar.svelte';

	import Footer from '$lib/components/footer.svelte';

	inject();
</script>

<div class="wrapper">
	<NavBar />
	<main>
		<slot />
	</main>
	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}

	.footer {
		background-color: #f8f8f8;
		padding: 20px 10px 10px;
		text-align: center;
	}
</style>
