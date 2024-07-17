import client from '$lib/sanity/sanity-client';
import imageUrlBuilder from '@sanity/image-url';

export const load = async ({ params }) => {
	const { date } = params;

	const blog = (
		await client.fetch(`
            *[_type == "blogs" && publishedAt < now() && publishedAt == "${date}"]{
                title,
                'image': image.asset->url,
                'altText': image.alt,
                publishedAt,
                content
                }`)
	)[0];
	console.log(blog);

	const processPortableText = (/** @type {any[]} */ content) => {
		return content.map((/** @type any } */ block) => {
			if (block._type === 'image') {
				const builder = imageUrlBuilder(client);
				block.url = builder.image(block.asset._ref).url();
			}
			return block;
		});
	};

	const processedContent = processPortableText(blog.content);

	return {
		...blog,
		content: processedContent
	};
};
