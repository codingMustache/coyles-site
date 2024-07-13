import { deserialize } from '$app/forms';

export default {
	title: 'Blogs',
	name: 'blogs',
	type: 'document',
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Title'
		},
		{
			type: 'date',
			name: 'publishedAt',
			title: 'Published Date',
			description: 'When you want the blog to be published ',
			placeholder: 'MM-DD-YYYY',
			initialValue: `${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}-${new Date().getFullYear()}`,
			options: {
				dateFormat: 'MM-DD-YYYY'
			}
		},
		{
			type: 'image',
			name: 'image',
			title: 'Image',
			fields: [
				{
					type: 'string',
					name: 'alt',
					title: 'Alternative text',
					description: `Some of your visitors cannot see images, 
								be they blind, color-blind, low-sighted; 
								alternative text is of great help for those 
								people that can rely on it to have a good idea of 
								what\'s on your page.`
				}
			]
		},
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [
				{
					type: 'block',
					title: 'Block',
					styles: [
						{
							title: 'Normal',
							value: 'normal'
						},
						{
							title: 'Quote',
							value: 'blockquote'
						}
					],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' }
						]
					}
				},
				{
					type: 'image',
					fields: [
						{
							type: 'string',
							name: 'alt',
							title: 'Alternative text',
							description: `Some of your visitors cannot see images, 
								be they blind, color-blind, low-sighted; 
								alternative text is of great help for those 
								people that can rely on it to have a good idea of 
								what\'s on your page.`,
							options: {
								isHighlighted: true
							}
						}
					]
				}
			]
		}
	]
};
