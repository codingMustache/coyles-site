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

<div id="photo-grid">
	{#each portfolioItems as img}
		<button class="imgs" on:click={() => openDialog(img)} aria-label="Open Dialog" type="button">
			<PortfolioItem {img} />
		</button>
	{/each}
</div>

{#if activeImage}
	<button class="dialog" on:click={closeDialog} aria-label="Close Dialog" type="button">
		<img src={activeImage} alt="enlarged portfolio item" />
	</button>
{/if}

<style>
	#load-more {
		border: 1px solid #ccc;
	}
	.dialog {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		border: 1px solid #ccc;
		box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.5);
		z-index: 100;
		height: fit-content;
		max-height: 90vh;
		width: 90vw;
		overflow: auto;
		padding: 20px;
	}
	.dialog img {
		width: 100%;

		height: auto;
	}
	#photo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-auto-rows: 150px;
		gap: 10px;
		width: 100%;
		overflow-x: auto;
		white-space: nowrap;
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

	.imgs {
		transition: 300ms;
		filter: grayscale(100%);
	}

	.imgs:hover {
		scale: 1.1;
		filter: grayscale(0);
		z-index: 5;
	}

	@media (max-width: 768px) {
		.imgs:hover {
			scale: 1.05;
		}
		#photo-grid {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(5, auto);
			width: 100%;
			padding: 0px;
		}
	}
</style>
