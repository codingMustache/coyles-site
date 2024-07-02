import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
	name: 'default',
	title: 'Coyle Parker',

	projectId: 'mfxl6xft',
	dataset: 'production',
	basePath: '/admin',
	plugins: [structureTool()],

	schema: {
		types: [
			{
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
							'This text will be hidden from the user but still accessible to screen readers and SEO',
						name: 'hiddenText',
						type: 'string'
					}
				]
			},
			{
				title: 'Post',
				name: 'post',
				type: 'document',
				fields: [
					{
						type: 'string',
						name: 'title',
						title: 'Title'
					}
				]
			},
			{
				title: 'Poster',
				name: 'poster',
				type: 'image',
				options: {
					hotspot: true // <-- Defaults to false
				},
				fields: [
					{
						name: 'caption',
						type: 'string',
						title: 'Caption'
					},
					{
						name: 'attribution',
						type: 'string',
						title: 'Attribution'
					}
				]
			}
		]
	}
});
