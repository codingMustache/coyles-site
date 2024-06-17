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
			name: 'John Doe',
			review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			img: headshot
		},
		{
			name: 'Jane Doe',
			review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			img: headshot
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
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	#review-card {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 30px;
		width: 300px;
		margin: 10px;
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
	@media (max-width: 600px) {
		#review-card {
			width: 90%;
		}
	}
</style>
