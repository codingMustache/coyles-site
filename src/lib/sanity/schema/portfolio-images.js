export default {
	title: 'Portfolio Images',
	name: 'portfolioImages',
	type: 'document',

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
			title: 'Hidden Text',
			description:
				'This text will be hidden from the user but still accessible to screen readers and SEO, you should never use Image, photo, picture or anything like that here',
			name: 'hiddenText',
			type: 'string'
		}
	]
};
