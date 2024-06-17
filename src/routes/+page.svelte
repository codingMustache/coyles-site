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
	import img1 from '$lib/images/seperators/img-2.webp';
	import img2 from '$lib/images/seperators/img-7.webp';
	import img3 from '$lib/images/seperators/img-3.webp';
	inject();
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />
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
	<img src={img} alt="Coyle tattooing someone" width="100px" height="100px" />
	<section id="portfolio">
		<PortfolioList />
	</section>
	<img src={img1} alt="close up on Coyle tattooing someone" width="100px" height="100px" />
	<section id="bio">
		<Bio />
	</section>
	<img src={img2} alt="Coyle tattooing someone" width="100px" height="100px" />
	<section id="reviews">
		<ReviewList />
	</section>
	<img src={img3} alt="construction site" width="100px" height="100px" />
	<section id="footer"><Footer /></section>
</main>

<style>
	#nav {
		width: 100%;
		position: sticky;
		position: -webkit-sticky;
		top: 0;
		z-index: 5;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	#header {
		display: contents;
		position: absolute;
		width: 100%;
	}
	section {
		width: 100%;
		background-color: white;
		box-shadow: 1px 1px 50px 10px black;
	}
	img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		z-index: -2;
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: 0;
	}
	main {
		flex-direction: column;
		width: 100%;
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
</style>
