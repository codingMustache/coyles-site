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
	//console.log(blog);

	const processPortableText = (/** @type {any[]} */ content) => {
		const processedBlocks = content.map(
			(
				/** @type {{ _type: string; url: string; asset: { _ref: import("@sanity/image-url/lib/types/types").SanityImageSource; }; }} */ block
			) => {
				if (block._type === 'image') {
					const builder = imageUrlBuilder(client);
					block.url = builder.image(block.asset._ref).url();
				}
				return block;
			}
		);

		return processedBlocks;
	};

	const processedContent = processPortableText(blog.content);

	return {
		...blog,
		content: processedContent
	};
};
