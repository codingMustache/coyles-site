import client from '$lib/sanity/sanity-client';

export const GET = async ({ url }) => {
	const cnt = Number(url.searchParams.get('count')) || 1;

	const blogs = await client.fetch(
		`*[_type == "blogs" && publishedAt <= now()] | order(publishedAt desc) [${cnt}...${cnt + 10}]{
            title,
            'image': image.asset->url,
            'altText': image.alt,
            publishedAt,
        }`
	);

	return new Response(JSON.stringify({ success: true, body: { blogs } }), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
};
