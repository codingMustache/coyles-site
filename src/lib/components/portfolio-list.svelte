<script>
	// @ts-nocheck

	import PortfolioItem from '$lib/components/portfolio-item.svelte';

	export let portfolioItems;
	/**
	 * @type {string |null}
	 */
	let activeImage = null;

	const openDialog = (/** @type {string | null} */ img) => (activeImage = img);

	const closeDialog = () => (activeImage = null);
	let scrollContainer;

	const handleWheel = (e) => {
		e.preventDefault();
		scrollContainer.scrollLeft += e.deltaY;
	};
</script>

<div class="scrollable" bind:this={scrollContainer} on:wheel={handleWheel}>
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
		<img src={activeImage.image} alt={activeImage.hiddenTxt} />
	</button>
{/if}

<style>
	.dialog {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		border: 1px solid #ccc;
		box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.5);
		z-index: 40;
		width: fit-content;

		height: 90%;
		padding: 20px;
	}
	.dialog img {
		width: auto;
		height: 100%;
	}

	.scrollable {
		overflow-y: scroll;
		padding: 30px 0;
		width: 100%;
	}

	#photo-grid {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-auto-columns: minmax(300px, 1fr);
		grid-auto-flow: column;
		width: 100%;
		height: 100%;
	}

	.imgs {
		transition: 300ms;
		filter: grayscale(100%);
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.imgs:hover {
		scale: 0.9;
		filter: grayscale(0);
		z-index: 5;
	}
	button {
		padding: 3px;
	}

	button.imgs {
		width: 100%;
		background-color: rgb(255, 255, 255);
		border-radius: 5px;
		cursor: pointer;
		border: none;
	}
</style>
