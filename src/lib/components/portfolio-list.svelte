<script>
	import PortfolioItem from '$lib/components/portfolio-item.svelte';
	import portfolioItems from '$lib/images/portfolio/index';
	let portfolioItems = portfolioItems.slice(0, 10);
</script>

<div id="photo-grid">
	{#each portfolioItems as img}
		<PortfolioItem {img} />
	{/each}
</div>

<style>
	#photo-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, auto);
		gap: 10px;
		padding: 20px 50px;
	}
	@media (max-width: 768px) {
		#photo-grid {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(5, auto);
		}
	}
</style>
