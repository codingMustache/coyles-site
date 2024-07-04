<script>
	import PortfolioItem from '$lib/components/portfolio-item.svelte';

	export let portfolioItems;
	/**
	 * @type {string |null}
	 */
	let activeImage = null;

	const openDialog = (/** @type {string | null} */ img) => (activeImage = img);

	const closeDialog = () => (activeImage = null);
</script>

<div class="scrollable">
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
		<img src={activeImage.image} alt="enlarged portfolio item" />
	</button>
{/if}

<style>
	.dialog {
		position: fixed;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		border: 1px solid #ccc;
		box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.5);
		z-index: 100;
		height: fit-content;
		width: 95vw;
		padding: 10px;
		max-height: unset;
	}
	.dialog img {
		width: 100%;
		height: auto;
		z-index: 101;

		border-radius: 5px;
	}
	.scrollable {
		width: 100%;
		overflow-x: auto;
		white-space: nowrap;
		padding: 10px;
		box-sizing: border-box;
	}
	#photo-grid {
		display: inline-grid;
		grid-template-rows: repeat(2, 1fr);
		grid-auto-flow: column;
		gap: 10px;
		width: fit-content;
		overflow: scroll;
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
		background-color: rgb(255, 255, 255);
		border: 1px solid rgb(0, 0, 0);
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
		border: none;
		border-radius: 5px;
		max-height: 40vw;
	}

	@media (max-width: 768px) {
		.imgs:hover {
			scale: 1.05;
		}
	}
</style>
