<script>
	// @ts-nocheck
	export let data;

	const humanReadableDate = (/** @type {string | number | Date} */ dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	};
</script>

<div class="main">
	<h1>Blogs Posts</h1>

	<div class="card-list">
		{#each data.blogs as blog}
			<a href={`blogs/${blog.publishedAt}`} aria-label={`A blog post titled: ${blog.title}`}>
				<div class="blog-card">
					<div class="blog-card-content">
						<h2>{blog.title}</h2>
						<p>Published: {humanReadableDate(blog.publishedAt)}</p>
					</div>
					<img src={blog.image} alt={blog.altText} />
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 14%;
		width: 100%;
	}

	h1 {
		color: black;
		font-family: inter-bold;
		font-size: xx-large;
		margin-bottom: 20px;
	}
	.card-list {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 10px;
		height: 100%;
		width: 90%;
	}
	a {
		min-height: 200px; /* Adjust as needed */
		width: 100%;
	}

	.blog-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 200px; /* Adjust as needed */
		width: 100%;
		position: relative;
		border: 1px solid #ddd;
		padding: 10px;
		box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
		transition: 300ms;
	}
	.blog-card-content {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width: 50%;
		min-height: 200px;
	}
	.blog-card:hover {
		box-shadow: 0 0 16px 3px rgba(0, 0, 0, 0.2);
		scale: 1.001;
	}
	.blog-card:hover img {
		object-position: 70% 70%;
	}

	.blog-card h2 {
		font-size: x-large;
	}

	.blog-card p {
		color: rgb(134, 134, 134);
	}

	.blog-card img {
		position: absolute;
		top: 50%;
		right: 0px;
		transform: translateY(-50%);
		object-fit: cover;
		max-height: 100%; /* Adjust as needed */
		width: 50%;
		transition: 300ms;
	}
	@media (max-width: 768px) {
		.main {
			margin-top: 20%;
		}
	}
</style>
