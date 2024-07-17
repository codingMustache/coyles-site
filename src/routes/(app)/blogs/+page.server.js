import client from '$lib/sanity/sanity-client';

export const load = async () => {
	const blogs = await client.fetch(
		`*[_type == "blogs" && publishedAt <= now()]{
                title,
                'image': image.asset->url,
                'altText': image.alt,
                publishedAt,
        }`
	);
	
	const seo = (
		await client.fetch(
			`*[_type == "seo" && _id == "contact"]{
						"tile": pageTitle,
						"description": metaDescription,
						"image": openGraphImage.asset->url,
						}`
		)
	)[0];

	return {
		blogs,
		seo
	};
};
