export default {
	title: 'Bio',
	name: 'bio',
	type: 'document',
	fields: [
		{
			title: 'Bio',
			name: 'bio',
			description: 'A short bio about the author',
			type: 'text'
		},
		{
			title: 'Image',
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
		}
	]
};
