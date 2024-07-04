import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'mfxl6xft',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false
});

export const load = async ({ params }) => {
	const bio = (
		await client.fetch(
			`*[_id == "bio"]{
			"content" : content[0].children[0].text, 
			"image": image.asset->url,
			"hiddenText": hiddenText
			}`
		)
	)[0];
	const portfolioImages = await client.fetch(
		`*[_type == "portfolioImages"]{
		"image": image.asset->url, 
		"hiddenText": hiddenText
		}`
	);
	const images = (
		await client.fetch(
			`*[_id == "imageGroup"]{
        "headerImage": headerImage.asset->url, 
		"headerImageTxt": headerImage.alt, 
        "topImage": topImage.asset->url, 
		"topImageTxt": topImage.alt, 
        "middleImage": middleImage.asset->url, 
		"middleImageTxt": middleImage.alt, 
        "bottomImage": bottomImage.asset->url, 
		"bottomImageTxt": bottomImage.alt,
        }`
		)
	)[0];

	const reviews = await client.fetch(
		`*[_type == "reviews"]{
		title,
		name, 
		"review": review[0].children[0].text, 
		"image": image.asset->url
		}`
	);

	return {
		images,
		portfolioImages,
		bio,
		reviews
	};
};
