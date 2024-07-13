<script>
	import imageUrlBuilder from '@sanity/image-url';
	export let portableText;
	const imageUrl = portableText.value.url;
	const imageAlt = portableText.value.alt;
</script>

<div class="img__w">
	<img src={imageUrl} alt={imageAlt} />
</div>

<style>
	.img__w {
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img__w img {
		max-width: 100%;
		margin-block: 2rem;
		border-radius: 0.5rem;
	}
</style>
