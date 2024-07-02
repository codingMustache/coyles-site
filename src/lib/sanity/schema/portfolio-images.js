export default {
	title: 'Portfolio Images',
	name: 'portfolioImages',
	type: 'document',

	fields: [
		{
			title: 'Images',
			name: 'image',
			type: 'image'
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
