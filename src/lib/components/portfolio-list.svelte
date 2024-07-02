<script>
	import PortfolioItem from '$lib/components/portfolio-item.svelte';
	import portfolioItems from '$lib/images/portfolio/index';

	// State to track which image is currently open in the dialog
	/**
	 * @type {string |null}
	 */
	let activeImage = null;

	const openDialog = (/** @type {string | null} */ img) => (activeImage = img);

	const closeDialog = () => (activeImage = null);
</script>

<div class="grid-container">
	<div id="photo-grid">
		{#each portfolioItems as img}
			<button class="imgs" on:click={() => openDialog(img)} aria-label="Open Dialog" type="button">
				<PortfolioItem {img} />
			</button>
		{/each}
	</div>
</div>

{#if activeImage}
	<button class="dialog" on:click={closeDialog} aria-label="Close Dialog" type="button">
		<img src={activeImage} alt="enlarged portfolio item" />
	</button>
{/if}

<style>
	.dialog::after {
		background: black;
	}
	.dialog {
		position: fixed;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		border: 1px solid #ccc;
		box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.5);
		z-index: 100;
		height: 85vh;
		width: 95vw;
		overflow: auto;
		padding: 20px;
	}
	.dialog img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 1/1;
	}

	.grid-container {
		width: 100%;
		height: fit-content;
		overflow-x: auto;
		padding: 20px 0;
	}

	#photo-grid {
		display: flex;
		flex-wrap: nowrap;
		scroll-snap-type: x mandatory;
	}

	.imgs {
		flex: 0 0 auto;
		width: auto;
		height: 70vh;
		aspect-ratio: 1/1;
		transition: 300ms;
		filter: grayscale(100%);
		object-fit: cover;
		display: block;
		scroll-snap-align: start;
	}

	.imgs:hover {
		transform: scale(0.97);
		filter: grayscale(0);
		z-index: 5;
	}

	button {
		width: 100%;
		background-color: rgb(255, 255, 255);
		border: 1px solid rgb(0, 0, 0);
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
		border: none;
	}

	@media (max-width: 768px) {
		.imgs:hover {
			scale: 1.05;
		}
	}
</style>
