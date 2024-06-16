<script>
	import PortfolioItem from '$lib/components/portfolio-item.svelte';
	import headshot from '$lib/images/headshot.jpeg';
	const imgs = Array(10).fill(headshot);
</script>

<div id="photo-grid">
	{#each imgs as img}
		<PortfolioItem {img} />
	{/each}
</div>

<style>
	#photo-grid {
		margin: 10vh auto;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, auto);
		gap: 10px;
	}
	@media (max-width: 600px) {
		#photo-grid {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(5, auto);
		}
	}
</style>
