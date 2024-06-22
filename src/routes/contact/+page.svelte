<script>
	import FormModal from '$lib/components/please-read.svelte';
	import Footer from '$lib/components/footer.svelte';
	import img from '$lib/images/headshot.jpeg';
	import ContactForm from '$lib/components/contact-form.svelte';
</script>

<svelte:head>
	<title>Coyle Parker</title>
	<meta property="og:title" content="For your next tattoo book with Coyle Parker" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={img} />
	<meta property="og:url" content="https://www.coyleparker.art/contact" />
</svelte:head>

<h2>Contact Form</h2>
<div class="page-content">
	<FormModal />
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
		justify-content: center;
		gap: 20px;
		min-height: 90vh;
		margin: 0 auto;
	}

	h2 {
		margin-top: 50px;
		text-align: center;
		font-size: 2em;
	}

	@media (max-width: 1100px) {
		.page-content {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
