<script>
	import img from '$lib/images/separators/img-7.webp';
</script>

<div>
	<h3>Please Read:</h3>

	<p>
		<strong> If you do not receive a response about your tattoo request: </strong>
	</p>
	<p>
		This means our I have reviewed your request and decided not to take it on. This could be for any
		number of reasons such as:
	</p>
	<ul>
		<li>It is something I do not feel comfortable with or interested in doing.</li>
		<li>
			I have been taking on a lot of similar projects and want to keep the work I take on
			diversified.
		</li>
		<li>I am not accepting new appointments at this time</li>
	</ul>
	<img src={img} alt="" />
</div>

<style>
	img {
		object-fit: cover;
		width: 100%;
		height: 300px;
		border-radius: 3px;
		margin: 10px auto;
	}
	ul {
		margin: 20px 0;
	}
	li {
		list-style-type: disc;
		line-height: 2;
		width: 70%;
		margin: 0 auto;
	}
	h3 {
		margin-bottom: 5px;
		font-size: larger;
		font-family: inter-semibold, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
			'Lucida Sans', Arial, sans-serif;
	}
	div {
		width: 100%;
		padding: 20px;
		max-width: 600px;
		line-height: 2;
		font-size: larger;
	}
	@media (max-width: 768px) {
		div {
			width: 100%;
		}
	}
</style>
