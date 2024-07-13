export default {
	type: 'document',
	title: 'Reviews',
	name: 'reviews',
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Title'
		},
		{
			type: 'image',
			name: 'image',
			title: 'Photo of Reviewer'
		},
		{
			type: 'string',
			name: 'name',
			title: 'Name of Reviewer'
		},

		{
			title: 'Review-content',
			name: 'reviewContent',
			type: 'text'
		}
	]
};
