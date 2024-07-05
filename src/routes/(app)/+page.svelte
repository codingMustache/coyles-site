<script>
	//import { portfolioItems } from '$lib/images/portfolio/index';
	import PortfolioList from '$lib/components/portfolio-list.svelte';

	import Bio from '$lib/components/bio.svelte';
	import HeaderHero from '$lib/components/header-hero.svelte';
	import ReviewList from '$lib/components/review-list.svelte';

	import IG from '$lib/icons/instagram.svelte';
	import Mail from '$lib/icons/email.svelte';

	export let data;
	let headerImg = { img: data.images.headerImage, txt: data.images.headerImageTxt };
	let portfolioItems = data.portfolioImages;
	let bio = data.bio;
	let reviews = data.reviews;
</script>

<svelte:head>
	<title>Coyle Parker</title>
	<meta property="og:title" content="Coyle Parker - Tattoo Artist - Portfolio and Booking site" />
	<meta
		name="description"
		content="Coyle Parker A New Orleans Tattoo artist portfolio and booking page "
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content={headerImg.img} />
	<meta property="og:url" content="https://www.coyleparker.art" />
</svelte:head>

<div id="home-page-content">
	<section id="header">
		<HeaderHero {headerImg} />
	</section>

	<section id="portfolio">
		<PortfolioList {portfolioItems} />
	</section>
	<div class="separator">
		<a href="/contact">Book Now</a>
		<img src={data.images.topImage} alt={data.images.topImageTxt} width="100px" height="100px" />
	</div>

	<section id="bio">
		<Bio {bio} />
	</section>
	<div class="separator">
		<h3>Visit My Socials</h3>
		<div class="content">
			<a href="https://www.instagram.com/coyleparker_tattoo?igsh=Nm1hemFxc294ZDJv" target="_blank">
				<IG />
			</a>
			<a href="mailto:contact@coyleparker.art">
				<Mail />
			</a>
		</div>
		<img
			src={data.images.middleImage}
			alt={data.images.middleImageTxt}
			width="100px"
			height="100px"
		/>
	</div>

	<section id="reviews">
		<ReviewList {reviews} />
	</section>
	<div class="separator">
		<a
			href="https://search.google.com/local/writereview?placeid=ChIJQxC1x0DT2WQR8LPBb0b7Tko&source=g.page.m._&laa=merchant-review-solicitation"
			>Write A Review</a
		>
		<img
			src={data.images.bottomImage}
			alt={data.images.bottomImageTxt}
			width="100px"
			height="100px"
		/>
	</div>
</div>

<style>
	.separator {
		display: inline-block;
		position: relative;
	}
	.separator h3 {
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: xx-large;
		padding: 20px;
		text-align: center;
		min-width: 200px;
		font-weight: bold;
	}
	.separator .content {
		position: absolute;
		display: flex;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		gap: 20px;
	}
	.content > a {
		color: white;
		border: 2px solid white;
		padding: 10px;
		text-align: center;
		width: 40px;
		height: 40px;
		border: unset;
	}
	.separator > a {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: x-large;
		border: 2px solid white;
		background-color: rgba(77, 77, 77, 0.3);
		padding: 20px;
		text-align: center;
		min-width: 200px;
		backdrop-filter: blur(10px);
	}
	#home-page-content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	section {
		background: white;
	}
	img {
		position: sticky;
		position: -webkit-sticky;
		top: 0;
		width: 100%;
		height: 600px;
		object-fit: cover;
		z-index: -1;
	}
</style>
