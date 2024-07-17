// @ts-nocheck
import { emailer } from '$lib/nodemailer/emailer';
import { imgParser } from '$lib/nodemailer/imgParser';
import { msgParser } from '$lib/nodemailer/msgParser';
import client from '$lib/sanity/sanity-client';

export const load = async () => {
	const image = (
		await client.fetch(
			`*[_id == "imageGroup"]{
        		"img": middleImage.asset->url, 
    			"imgTxt": middleImage.alt, 
        }`
		)
	)[0];

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
		image,
		seo
	};
};

export const actions = {
	contact: async ({ request }) => {
		const form = await request.formData();
		const formObj = Object.fromEntries(form.entries());
		const files = form.getAll('files');
		console.log(files);
		let attachments = [];
		if (files) {
			attachments = await imgParser(files);
		}
		console.log(formObj);
		const htmlParser = msgParser(formObj, attachments);
		console.log(htmlParser);
		//await emailer(htmlParser, attachments);

		return { success: true };
	}
};
