<script>
	import FormModal from '$lib/components/please-read.svelte';

	import ContactForm from '$lib/components/contact-form.svelte';

	export let data;
</script>

<svelte:head>
	<title>Coyle Parker</title>
	<meta property="og:title" content="Book you next tattoo with Coyle Parker" />
	<meta
		name="description"
		content="Coyle Parker A New Orleans Tattoo artist portfolio and booking page - Contact Page and Booking Form "
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.coyleparker.art/contact" />
</svelte:head>

<div>
	<FormModal {data} />
	<ContactForm />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		gap: 20px;
		min-height: 90vh;
		width: 100%;
		max-width: 1500px;
		margin: 0 auto;
		margin-top: 200px;
	}

	@media (max-width: 1100px) {
		div {
			flex-direction: column;
			align-items: center;
			width: 90%;
		}
	}
</style>
