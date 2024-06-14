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
		top: 30%;
		width: 100%;
		z-index: 1;
	}
	#header h1 {
		margin: 0 auto;
		font-weight: 800;
		color: #797164;
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: #303020;
		width: fit-content;
		font-size: 15vw;
		text-shadow: 0px 0px 10px black;
	}

	#header p {
		margin: 0 auto;
		font-weight: 1;
		color: white;
		width: fit-content;
		font-size: 4vw;
	}
	#header-img {
		box-shadow: 1px 1px 10px 50px black inset;
		object-fit: cover;
		width: 100%;
		height: 90vh;
		border-radius: 0;
	}
</style>
