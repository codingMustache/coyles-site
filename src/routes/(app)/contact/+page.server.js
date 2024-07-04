import { emailer } from '$lib/nodemailer/emailer';
import { imgParser } from '$lib/nodemailer/imgParser';
import { msgParser } from '$lib/nodemailer/msgParser';
import client from '$lib/sanity/sanity-client';

export const load = async ({ params }) => {
	const image = (
		await client.fetch(
			`*[_id == "imageGroup"]{
        "img": middleImage.asset->url, 
    		"imgTxt": middleImage.alt, 
        }`
		)
	)[0];
	console.log(image);

	return {
		image
	};
};

export const actions = {
	/**
	 * @description: Contact form submission
	 * @param requet {Request}
	 */
	// @ts-ignore
	contact: async ({ request }) => {
		const form = await request.formData();
		const formObj = Object.fromEntries(form.entries());
		const files = form.getAll('references');
		const attachments = await imgParser(files);
		const htmlParser = msgParser(formObj);

		emailer(htmlParser, attachments);

		return { success: true };
	}
};
