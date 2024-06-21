<script>
	import headShot from '$lib/images/headshot-cutout.png';
</script>

<div id="bio">
	<p>
		Driving past a brown house on the main strip in Redmond, OR Coyle (in child form) fantasized
		about his career as an inventor. He grew up making plans to build wooden robots and attempted a
		WWII replica out of Popsicle sticks. He later won best-looking car in the pine wood derby (with
		a lot of help from his brother), and won a blue ribbon and $100 for best original artwork at the
		Oregon State fair. The “grown up” version of Coyle never lost the desire to create something
		from nothing and his vision came to life in New Orleans where he currently resides and works as
		a tattoo artist.
	</p>

	<img src={headShot} alt="coyle parker head shot" />
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
	}
	img {
		width: auto;
		height: 500px;
		border-radius: 5px;
		filter: grayscale(100%);
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
			object-fit: cover;
			object-position: center top;
			width: 100%;
			height: 600px;
			margin-top: 50px;
		}
	}
</style>
