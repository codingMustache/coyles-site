import { deserialize } from '$app/forms';

export default {
	title: 'SEO',
	name: 'seo',
	type: 'document',

	fields: [
		{
			title: 'Page Title',
			name: 'pageTitle',
			description: 'The title of the page, keep it under 60 characters',
			type: 'string'
		},
		{
			title: 'Meta Description',
			name: 'metaDescription',
			description: 'The description of the page, keep it under 160 characters',
			type: 'text'
		},
		{
			title: 'Share Image',
			name: 'openGraphImage',
			type: 'image'
		}
	]
};
