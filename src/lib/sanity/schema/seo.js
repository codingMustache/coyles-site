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
			title: 'Open Graph Title',
			name: 'openGraphTitle',
			description: 'The title of the page, keep it under 60 characters',
			type: 'string'
		},
		{
			title: 'Open Graph Description',
			name: 'openGraphDescription',
			description: 'The description of the page, keep it under 160 characters',
			type: 'text'
		},
		{
			title: 'Open Graph Image',
			name: 'openGraphImage',
			type: 'image'
		},
		{
			title: 'Twitter Title',
			name: 'twitterTitle',
			description: 'The title of the page, keep it under 60 characters',
			type: 'string'
		},
		{
			title: 'Twitter Description',
			name: 'twitterDescription',
			description: 'The description of the page, keep it under 160 characters',
			type: 'text'
		},
		{
			title: 'Twitter Image',
			name: 'twitterImage',
			type: 'image'
		}
	]
};
