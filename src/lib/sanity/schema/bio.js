export default {
	title: 'Bio',
	name: 'bio',
	type: 'document',
	fields: [
		{
			title: 'content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }]
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		}
	]
};
