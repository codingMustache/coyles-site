<script>
	// @ts-nocheck

	/**@type {string} */
	export let img;
</script>

<img src={img.image} alt={img.altText} width="100px" height="100px" />

<style>
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		aspect-ratio: 1/1;
		border-radius: 5px;
		transition: 500ms;
	}
</style>
