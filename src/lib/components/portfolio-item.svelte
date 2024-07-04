<script>
	// @ts-nocheck

	/**@type {string} */
	export let img;
</script>

<img src={img.image} alt={img.hiddenTxt} width="100px" height="100px" />

<style>
	img {
		object-fit: cover;
		aspect-ratio: 1/1;
		width: 100%;
		height: auto;
		border-radius: 5px;
		transition: 500ms;
		display: block;
	}
</style>
