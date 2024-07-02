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
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
};
