import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { UserIcon, ComposeIcon, ImagesIcon, ImageRemoveIcon } from '@sanity/icons';

import blogPosts from './schema/blog-posts';
import reviews from './schema/reviews';
import bio from './schema/bio';
import portfolioImages from './schema/portfolio-images';
import separatorImages from './schema/separator-images';

// Define the singleton document types

const singletonObj = {
	structure: (S) =>
		S.list()
			.title('Settings')
			.items([
				S.listItem()
					.title('Bio')
					.id('bio')
					.child(S.document().schemaType('bio').documentId('bio').title('Bio'))
					.icon(UserIcon),
				S.listItem()
					.title('Separator Images')
					.id('imageGroup')
					.child(
						S.document().schemaType('imageGroup').documentId('imageGroup').title('Separator Images')
					)
					.icon(ImageRemoveIcon),
				S.documentTypeListItem('blogs').title('Blogs').icon(ComposeIcon),
				S.documentTypeListItem('portfolioImages').title('Portfolio Images').icon(ImagesIcon)
			])
};

export default defineConfig({
	name: 'default',
	title: 'Coyle Parker',

	projectId: 'mfxl6xft',
	dataset: 'production',
	basePath: '/admin',
	plugins: [structureTool(singletonObj)],

	schema: {
		types: [blogPosts, reviews, bio, portfolioImages, separatorImages]
	}
});
