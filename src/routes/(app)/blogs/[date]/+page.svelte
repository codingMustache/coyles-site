<script>
	// @ts-nocheck
	import ImageRte from '$lib/components/image-render.svelte';
	import { PortableText } from '@portabletext/svelte';
	export let data;
</script>

<div class="blog-content">
	<section>
		<h1>{data.title}</h1>
		<p class="pubDate">Published: {data.publishedAt}</p>
		<img class="titleImg" src={data.image} alt={data.altText} />
	</section>
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
		width: 100%;
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
		margin-top: 10%;
		width: 100%;
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
