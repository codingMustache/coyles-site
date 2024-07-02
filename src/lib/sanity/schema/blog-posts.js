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
			type: 'image',
			name: 'image',
			title: 'Image'
		},
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
};
