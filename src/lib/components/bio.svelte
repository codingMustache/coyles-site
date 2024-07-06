<script>
	export let bio;
</script>

<div id="bio">
	<p>
		{bio.content}
	</p>

	<img src={bio.image} alt={bio.hiddenText} width="100px" height="100px" />
</div>

<style>
	#bio {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 20px;
	}
	p {
		width: 60%;
		line-height: 2.5;
		font-size: large;
	}
	img {
		width: 100%;
		height: auto;
		max-width: 300px;
		border-radius: 5px;
	}
	@media (max-width: 768px) {
		#bio {
			flex-direction: column;
		}
		p {
			width: 90%;
			text-align: center;
		}
		img {
			width: 100%;
			height: auto;
		}
	}
</style>
