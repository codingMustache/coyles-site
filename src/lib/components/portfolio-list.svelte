<script>
	import PortfolioItem from '$lib/components/portfolio-item.svelte';
	import portfolioItems from '$lib/images/portfolio/index';

	let portfolioArr = portfolioItems.slice(0, 9);
	$: portfolioArr;
	let currentPage = 0;
	const pageSize = 9;
	$: isRotating = false;
	function getNextPage() {
		isRotating = true;
		let start = currentPage * pageSize;
		let end = start + pageSize;
		if (end > portfolioItems.length) {
			portfolioArr = [
				...portfolioItems.slice(start, portfolioItems.length),
				...portfolioItems.slice(0, end % portfolioItems.length)
			];
		} else {
			portfolioArr = portfolioItems.slice(start, end);
		}
		currentPage = (currentPage + 1) % Math.ceil(portfolioItems.length / pageSize);
		setTimeout(() => (isRotating = false), 1200);
	}
</script>

<div id="photo-grid">
	{#each portfolioArr as img}
		<div class="imgs" class:rotate={isRotating}>
			<PortfolioItem {img} />
		</div>
	{/each}
	<button on:click={getNextPage}>Load More</button>
</div>

<style>
	#photo-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, auto);
		gap: 10px;
		padding: 20px 50px;
	}
	button {
		width: 100%;
		background-color: rgb(255, 255, 255);
		border: 1px solid rgb(0, 0, 0);
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
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
		}
	}

	.rotate {
		-webkit-animation: rotate 1s normal forwards;
		animation: rotate 1s normal forwards;
	}
	@-webkit-keyframes rotate {
		from {
			-webkit-transform: translateX(0px) rotateY(0deg);
			transform: translateX(0px) rotateY(0deg);
		}
		to {
			-webkit-transform: translateX(0px) rotateY(360deg);
			transform: translateX(0px) rotateY(360deg);
		}
	}

	@keyframes rotate {
		from {
			-webkit-transform: translateX(0px) rotateY(0deg);
			transform: translateX(0px) rotateY(0deg);
		}
		to {
			-webkit-transform: translateX(0px) rotateY(360deg);
			transform: translateX(0px) rotateY(360deg);
		}
	}
</style>
