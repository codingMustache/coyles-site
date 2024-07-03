<script>
	import FormModal from '$lib/components/please-read.svelte';
	import img from '$lib/images/headshot.jpeg';
	import ContactForm from '$lib/components/contact-form.svelte';
</script>

<svelte:head>
	<title>Coyle Parker</title>
	<meta property="og:title" content="Book you next tattoo with Coyle Parker" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={img} />
	<meta property="og:url" content="https://www.coyleparker.art/contact" />
</svelte:head>

<div>
	<FormModal />
	<ContactForm />
</div>

<style>
	div {
		display: flex;
		justify-content: space-around;
		gap: 20px;
		min-height: 90vh;
		width: 100%;
		margin: auto 0;
	}

	@media (max-width: 1100px) {
		div {
			flex-direction: column;
			align-items: center;
			width: 90%;
			margin: 0 auto;
		}
	}
</style>
