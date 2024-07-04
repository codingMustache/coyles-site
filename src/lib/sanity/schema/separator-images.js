export default {
	name: 'imageGroup',
	title: 'Image Group',
	type: 'document',
	fields: [
		{
			name: 'headerImage',
			title: 'Header Image',
			type: 'image',
			fields: [
				{
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
					description: 'Important for SEO and accessibility'
				}
			]
		},
		{
			name: 'topImage',
			title: 'Top Image',
			type: 'image',
			fields: [
				{
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
					description: 'Important for SEO and accessibility'
				}
			]
		},
		{
			name: 'middleImage',
			title: 'Middle Image',
			type: 'image',
			fields: [
				{
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
					description: 'Important for SEO and accessibility'
				}
			]
		},
		{
			name: 'bottomImage',
			title: 'Bottom Image',
			type: 'image',
			fields: [
				{
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
					description: 'Important for SEO and accessibility'
				}
			]
		}
	]
};
