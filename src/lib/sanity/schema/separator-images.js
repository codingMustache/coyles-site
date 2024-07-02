export default {
	name: 'imageGroup',
	title: 'Image Group',
	type: 'document',
	fields: [
		{
			name: 'topImage',
			title: 'Top Image',
			type: 'image',
			options: {
				hotspot: true
			},
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
			options: {
				hotspot: true
			},
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
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
					description: 'Important for SEO and accessibility'
				}
			]
		}
	],
	__experimental_actions: ['update', 'publish', 'create', 'delete'] // "create"
};
