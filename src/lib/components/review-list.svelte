<script>
	import headshot from '$lib/images/headshot.jpeg';
	import jorge from '$lib/images/reviewers/img1.webp';
	const reviews = [
		{
			name: 'Jorge Carvajal',
			review: 'Very good service, I would recommend it to anyone.',
			img: jorge
		},
		{
			name: 'Owen Weber',
			review:
				'I have been going to Coyle for 6-7 years now. He is a great artist and person. I always look foreword to appts with him.',
			img: 'https://lh3.googleusercontent.com/a-/ALV-UjWijk66ij6z7N2HOp_bG-dsQg1rLJTZ03ArxQKF2jx694gpjHJh=s40-c-rp-mo-br100'
		},
		{
			name: 'Jena Renee',
			review:
				'I am a repeat customer and Coyle has never let me down! Personally, I love to give all creative freedom to the artist tattooing me. And with Coyle’s unique style, you know you won’t see anyone else walking around with your same piece! Highly recommend him!',
			img: 'https://lh3.googleusercontent.com/a-/ALV-UjV6Fkg5kogP5jYL5w4QwuH6XzX7ANGziy4QYLaFuPBj5pjffOfU=s40-c-rp-mo-br100'
		},
		{
			name: 'Michelle Villarrubia',
			review:
				'I’ve been tattooed by Coyle multiple times and it’s always a great experience! He’s creative, does fantastic work, and makes the overall experience easy and welcoming.',
			img: 'https://lh3.googleusercontent.com/a-/ALV-UjVr0fHhKq97FPtEFrmug6AhOJDKpoIbRxG-9rZ0ORIIkDX0a10FCg=s40-c-rp-mo-br100'
		},
		{
			name: 'Elias Hinderberger',
			review:
				'I’ve had two pieces from Coyle, and I’ve been really happy with both. Great communication while coming up with custom designs, and beautiful execution. I’ll be going back to have him do a handful more for sure',
			img: 'https://lh3.googleusercontent.com/a-/ALV-UjVcTjPflPoI7R4hAlHDB6aDOp-Vd7O-wxFxXLxXwsY3Lgh1_GP-=w60-h60-p-rp-mo-br100'
		}
	];
</script>

<div id="review-list">
	{#each reviews as review}
		<div id="review-card">
			<h3>
				{review.name}
			</h3>
			<p>
				"{review.review}"
			</p>
			<img src={review.img} alt="" />
		</div>
	{/each}
</div>

<style>
	#review-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		gap: 30px;
		width: 90%;
		padding: 20px;
	}

	#review-card {
		display: flex;
		flex-direction: column;
		height: 200px;
		justify-content: space-between;
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0px 0px 10px 1px rgba(200, 200, 200, 0.7);
	}
	#review-card img {
		width: 50px;
		height: 50px;
		border-radius: 100px;
		object-fit: cover;
		align-self: flex-end;
	}
	#review-card h3 {
		margin: 0;
		font-weight: bold;
	}
	@media (max-width: 768px) {
		#review-list {
			grid-template-columns: 1fr;
		}
		#review-card {
			width: 90%;
		}
	}
</style>
