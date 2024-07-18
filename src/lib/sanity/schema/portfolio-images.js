export default {
	title: 'Portfolio Images',
	name: 'portfolioImages',
	type: 'document',
	ordering: [
		{
			title: 'Order of appearance',
			name: 'place',
			by: [
				{
					field: 'image.place',
					direction: 'asc'
				}
			]
		}
	],
	preview: {
		select: {
			title: 'place',
			media: 'image'
		}
	},
	fields: [
		{
			title: 'Images',
			name: 'image',
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
								what\'s on your page.`
				}
			]
		},
		{
			type: 'number',
			name: 'place',
			title: 'Order of appearance',
			description: `You can set the order of appearance of the images. this can be set to 1, 2, 3 or even 10, 100, 1000. Smaller numbers will appear first.`
		}
	]
};
