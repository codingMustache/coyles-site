<script>
	import { inject } from '@vercel/analytics';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import NavBar from '$lib/components/nav-bar.svelte';

	import Footer from '$lib/components/footer.svelte';

	inject();
</script>

<NavBar />

<main>
	<slot />
</main>

<Footer />
