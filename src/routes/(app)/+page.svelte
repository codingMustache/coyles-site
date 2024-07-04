<script>
	//import { portfolioItems } from '$lib/images/portfolio/index';
	import PortfolioList from '$lib/components/portfolio-list.svelte';

	import Bio from '$lib/components/bio.svelte';
	import HeaderHero from '$lib/components/header-hero.svelte';
	import ReviewList from '$lib/components/review-list.svelte';

	import img from '$lib/images/separators/img-8.webp';

	export let data;
	let headerImg = { img: data.images.headerImage, txt: data.images.headerImageTxt };
	let portfolioItems = data.portfolioImages;
	let bio = data.bio;
</script>

<svelte:head>
	<title>Coyle Parker</title>
	<meta property="og:title" content="Coyle Parker - Tattoo Artist - Portfolio and Booking site" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={img} />
	<meta property="og:url" content="https://www.coyleparker.art" />
</svelte:head>

<div id="home-page-content">
	<section id="header">
		<HeaderHero {headerImg} />
	</section>

	<img src={data.images.topImage} alt={data.images.topImageTxt} width="100px" height="100px" />

	<section id="portfolio">
		<PortfolioList {portfolioItems} />
	</section>

	<img
		src={data.images.middleImage}
		alt={data.images.middleImageTxt}
		width="100px"
		height="100px"
	/>

	<section id="bio">
		<Bio {bio} />
	</section>

	<img
		src={data.images.bottomImage}
		alt={data.images.bottomImageTxt}
		width="100px"
		height="100px"
	/>
	<section id="reviews">
		<ReviewList />
	</section>

	<img src={data.images.lastImg} alt={data.images.lastImgTxt} width="100px" height="100px" />
</div>

<style>
	#home-page-content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	section {
		background: white;
		z-index: 10;
	}
	img {
		position: sticky;
		position: -webkit-sticky;
		top: 10vh;
		width: 100%;
		height: 300px;
		object-fit: cover;
		z-index: -1;
	}
</style>
