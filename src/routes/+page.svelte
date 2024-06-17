<script>
	import { inject } from '@vercel/analytics';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import PortfolioList from '$lib/components/portfolio-list.svelte';
	import NavBar from '$lib/components/nav-bar.svelte';
	import Bio from '$lib/components/bio.svelte';
	import HeaderHero from '$lib/components/header-hero.svelte';
	import ReviewList from '$lib/components/review-list.svelte';
	import Footer from '$lib/components/footer.svelte';
	import img from '$lib/images/seperators/img-8.webp';
	inject();
</script>

<svelte:head>
	<title>Coyle Parker</title>
	<meta property="og:title" content="Coyle Parker - Tattoo Artist - Portfolio and Booking site" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={img} />
	<meta property="og:url" content="https://www.coyleparker.art" />
</svelte:head>

<main>
	<section id="header">
		<HeaderHero />
	</section>
	<section id="nav">
		<NavBar />
	</section>
	<section id="portfolio">
		<PortfolioList />
	</section>
	<section id="bio">
		<Bio />
	</section>
	<section id="reviews">
		<ReviewList />
	</section>
	<section id="footer"><Footer /></section>
</main>

<style>
	#nav {
		width: 90%;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	#header {
		display: contents;
		position: absolute;
		width: 100%;
	}

	section {
		width: 80%;
	}

	main {
		flex-direction: column;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#footer {
		display: flex;
		justify-content: space-evenly;
		height: 10vh;
		align-items: center;
		width: 100vw;
	}
	@media (max-width: 700px) {
		section {
			width: 90%;
			margin: 0 auto;
		}
	}
</style>
