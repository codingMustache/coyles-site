import client from '$lib/sanity/sanity-client';

export const load = async ({ params }) => {
	try {
		const bio = (
			await client.fetch(
				`*[_id == "bio"]{
					'bio': bio,
					"image": image.asset->url,
					"altText": image.alt,
					}`
			)
		)[0];

		const portfolioImages = await client.fetch(
			`*[_type == "portfolioImages"]{
					"image": image.asset->url,
					"altText": image.alt,
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
							"review": reviewContent,
							"image": image.asset->url,
							}`
		);

		return {
			images,
			portfolioImages,
			bio,
			reviews
		};
	} catch (e) {
		console.log(e);
	}
};
