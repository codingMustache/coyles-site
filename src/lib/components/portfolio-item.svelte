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
		transform: scale(1.3);
		filter: unset;
		box-shadow: 0 0 50px #000000;
		z-index: 4;
	}
	@media (max-width: 768px) {
		img:hover {
			transform: scale(1.05);
		}
	}
</style>
