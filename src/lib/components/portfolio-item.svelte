<script>
	/**@type {string} */
	export let img;
</script>

<img src={img} alt="portfolio item" />

<style>
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		aspect-ratio: 1/1;
		border-radius: 5px;
		margin: 0 auto;
		transition: 300ms;
		filter: grayscale(100%);
	}
	img:hover {
		transform: scale(1.1);
		filter: unset;
	}
</style>
