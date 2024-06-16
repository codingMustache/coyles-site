<script>
	import img from '$lib/images/heads.gif';

</script>

<div id="header">
	<div>
		<h1>Coyle Parker</h1>
		<p>Tattoo Artist</p>
	</div>
	<img src={img} alt="background spooky gif" id="header-img" />
</div>

<style>
	#header {
		display: contents;
		position: absolute;
	}
	#header div {
		position: absolute;
		top: 20%;
		width: 100%;
		z-index: 1;
	}
	#header h1 {
		margin: 0 auto;
		text-align: center;
		font-weight: 800;
		color: #797164;
		width: fit-content;
		font-size: 15vw;
		text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.572);
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
		height: 90vh;
		border-radius: 0;
	}
	img {
		filter: grayscale();
	}
</style>
