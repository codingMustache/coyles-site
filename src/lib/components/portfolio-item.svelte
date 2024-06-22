<script>
	/**@type {string} */
	export let img;
	let open = false;
	function closeDialog() {
		open = !open;
	}
</script>

<div on:click={closeDialog}>
	<img src={img} alt="portfolio item" width="100px" height="100px" />
	<dialog {open}>
		tes akjshdlkjahslakjshdt
		<button on:click={closeDialog}>x</button>
	</dialog>
</div>

<style>
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		aspect-ratio: 1/1;
		border-radius: 5px;
		margin: 0 auto;
		transition: 500ms;
	}
	dialog {
		position: absolute;
		width: 90vw;
		height: 90vh;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 10;
	}
</style>
