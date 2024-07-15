import client from '$lib/sanity/sanity-client';

export const GET = async () => {
	const blogPosts = await client.fetch(`
        *[_type == "blogs"]
        {
            "slug": publishedAt,
        }
        `);
	console.log(blogPosts);
	return new Response(`
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
    <loc>
        https://www.coyleparker.art/
    </loc>
    <lastmod>
        ${new Date().toISOString()}
    </lastmod>
    <priority>
        1.00
    </priority>
</url>
<url>
    <loc>
        https://www.coyleparker.art/contact
    </loc>
    <lastmod>
        ${new Date().toISOString()}
    </lastmod>
    <priority>
        0.80
    </priority>
</url>
<url>
    <loc>
        https://www.coyleparker.art/blogs
    </loc>
    <lastmod>
        ${new Date().toISOString()}
    </lastmod>
    <priority>
        0.70
    </priority>
</url>
${blogPosts.map((post) => {
	return `<url>
    <loc>
        https://www.coyleparker.art/blogs/${post.slug}
    </loc>
    <lastmod>
        ${new Date().toISOString()}
    </lastmod>
    <priority>
        0.60
    </priority>
</url>`;
})}
</urlset>
    `);
};
