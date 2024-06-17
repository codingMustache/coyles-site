<script>
	import FormModal from '$lib/components/please-read.svelte';
	import Footer from '$lib/components/footer.svelte';
	import img from '$lib/images/headshot.jpeg';
	import ContactForm from '$lib/components/contact-form.svelte';
</script>

<svelte:head>
	<title>Coyle Parker</title>
	<meta property="og:title" content="For your next tattoo book with Colye Parker" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={img} />
	<meta property="og:url" content="https://www.coyleparker.art/contact" />
</svelte:head>

<dialog open={false}>test</dialog>

<a href="/">
	<p class="home">Home</p>
</a>
<h2>Contact Form</h2>
<div class="page-content">
	<aside>
		<FormModal />
	</aside>
	<ContactForm />
</div>
<Footer />

<style>
	a {
		position: fixed;
		top: 20px;
		background: white;
		border-radius: 10px;
	}
	.page-content {
		display: flex;
		width: 90%;
		margin: 0 auto;
	}
	aside {
		width: 25%;
		margin-top: 50px;
	}
	h2 {
		margin-top: 50px;
		text-align: center;
		font-size: 2em;
	}

	.home {
		margin: 20px;
	}

	@media (max-width: 768px) {
		.page-content {
			flex-direction: column;
		}
		aside {
			width: 100%;
		}
	}
</style>
