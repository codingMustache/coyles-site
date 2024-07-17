<script>
	import FormModal from '$lib/components/please-read.svelte';

	import ContactForm from '$lib/components/contact-form.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.seo.title}</title>
	<meta property="og:title" content={data.seo.title} />
	<meta name="description" content={data.seo.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={data.seo.image} />
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
