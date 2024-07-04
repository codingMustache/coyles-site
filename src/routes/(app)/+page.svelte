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
			<a href="/contact"><IG /></a>
			<a href="/contact"><Mail /></a>
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
			href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fmaps%2Fapi%2Fjs%2FReviewsService.CrossOriginAuthSuccess%3Fpb%3D%211shttps%253A%252F%252Fwww.google.com%26key%3DAIzaSyAQiTKe3tivKXammrJ6ov6u8E7KwZPNFss&hl=en&ifkv=AS5LTAQEkz7vMps-9tlQ_gpLx4WC1sslF6D72zS4rGRLF_AVAsdeIonust2mDQRXIaMVYU4YjtYW&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1879794338%3A1720126958113509&ddm=0"
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
		backdrop-filter: blur(10px);
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
