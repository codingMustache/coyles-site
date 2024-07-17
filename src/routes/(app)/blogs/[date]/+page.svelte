<script>
	// @ts-nocheck
	import ImageRte from '$lib/components/image-render.svelte';
	import { PortableText } from '@portabletext/svelte';
	export let data;
	const humanReadableDate = (/** @type {string | number | Date} */ dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	};
</script>

<svelte:head>
	<title>A blog post by Colye Parker</title>
	<meta property="og:title" content="A blog post by Colye Parker" />
	<meta name="description" content={data.title} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={data.seo.image} />
	<meta property="og:url" content={`https://www.coyleparker.art/blogs/${data.publishedAt}`} />
</svelte:head>

<div class="blog-content">
	<section>
		<h1>{data.title}</h1>
		<p class="pubDate">Published: {humanReadableDate(data.publishedAt)}</p>
	</section>
	<img class="titleImg" src={data.image} alt={data.altText} />
	<section class="post">
		<PortableText
			value={data.content}
			onMissingComponent={false}
			components={{
				types: {
					image: ImageRte
				}
			}}
		/>
	</section>
</div>

<style>
	.post {
		width: 90%;
		line-height: 2;
		margin-top: 50px;
		font-size: 1.2rem;
	}
	section {
		width: 90%;
	}
	.pubDate {
		color: #aaa;
		text-align: right;
		width: 100%;
		margin-bottom: 20px;
		padding-right: 20px;
	}
	.blog-content {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
		max-width: 1200px;
		margin: 10vh auto;
	}
	.titleImg {
		object-fit: cover;
		width: 100%;
		height: 300px;
	}

	h1 {
		color: black;
		font-family: inter-bold;
		font-size: xx-large;
		text-align: center;
		margin-bottom: 20px;
	}
</style>
