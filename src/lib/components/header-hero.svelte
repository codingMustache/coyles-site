<script>
	export let headerImg;
</script>

<div id="header">
	<div>
		<h1>Coyle Parker</h1>
		<p>Tattoo Artist</p>
	</div>
	<img
		src={headerImg.img}
		alt={headerImg.txt}
		id="header-img"
		loading="lazy"
		width="100px"
		height="100px"
	/>
</div>

<style>
	#header {
		display: contents;
		position: absolute;
	}
	#header div {
		position: absolute;
		height: 100%;
		z-index: 1;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	#header h1 {
		margin: 0 auto;
		text-align: center;
		color: #ebebeb;
		text-shadow:
			-1px -1px rgb(0, 0, 0),
			1px 1px rgb(0, 0, 0),
			2px 2px rgb(0, 0, 0),
			3px 3px rgb(0, 0, 0),
			4px 4px rgb(0, 0, 0),
			5px 5px rgb(0, 0, 0),
			6px 6px rgb(0, 0, 0),
			7px 7px rgb(0, 0, 0),
			8px 8px rgb(0, 0, 0),
			9px 9px rgb(0, 0, 0),
			10px 10px rgb(0, 0, 0),
			11px 11px rgb(0, 0, 0),
			1px 1px 15px rgb(255, 255, 255);
		font-size: 25rem;
	}

	#header p {
		margin: 0 auto;
		font-weight: 1;
		color: white;
		width: fit-content;
		font-size: 4vw;
		font-family: pathway, 'Courier New', Courier, monospace;
	}
	#header-img {
		box-shadow: 1px 1px 10px 50px black inset;
		object-fit: cover;
		width: 100%;
		height: 100vh;
		border-radius: 0;
	}
	img {
		filter: grayscale();
	}
</style>
