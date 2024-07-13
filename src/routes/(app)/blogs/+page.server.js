import client from '$lib/sanity/sanity-client';

export const load = async () => {
	const blogs = await client.fetch(
		`*[_type == "blogs" && publishedAt < now()]{
                title,
                'image': image.asset->url,
                'altText': image.alt,
                publishedAt,
        }`
	);
	console.log(blogs);
	return {
		blogs
	};
};
