export default {
	title: 'Bio',
	name: 'bio',
	type: 'document',
	fields: [
		{
			title: 'Content',
			name: 'content',
			description: 'A short bio about the author',
			type: 'array',
			of: [{ type: 'block' }]
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Hidden Text',
			name: 'hiddenText',
			type: 'string'
		}
	]
};
