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
			description:
				'When you want the blog to be published. Without this, the blog will not be published. Furture dates will not be published until the date is reached.'
		},

		{
			type: 'image',
			name: 'image',
			title: 'Title Image',
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
			title: 'Blog Post',
			name: 'content',
			type: 'array',
			description:
				'Do not include the title in this field. The title is a separate field, and stay aware of whitespace',
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
