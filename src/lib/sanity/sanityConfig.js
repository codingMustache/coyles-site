import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import {
	UserIcon,
	ComposeIcon,
	ImagesIcon,
	ImageRemoveIcon,
	StarIcon,
	SearchIcon,
	EarthGlobeIcon
} from '@sanity/icons';

import blogPosts from './schema/blog-posts';
import reviews from './schema/reviews';
import bio from './schema/bio';
import portfolioImages from './schema/portfolio-images';
import separatorImages from './schema/separator-images';
import seo from './schema/seo';

// Define the singleton document types
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['bio', 'imageGroup']);

const singletonObj = {
	structure: (/** @type any} */ S) =>
		S.list()
			.title('Settings')
			.items([
				S.listItem()
					.title('Bio')
					.id('bio')
					.child(S.document().schemaType('bio').documentId('bio').title('Bio'))
					.icon(UserIcon),
				S.listItem()
					.title('Images')
					.id('imageGroup')
					.child(S.document().schemaType('imageGroup').documentId('imageGroup').title('Images'))
					.icon(ImageRemoveIcon),
				S.listItem()
					.title('SEO')
					.icon(SearchIcon)
					.child(
						S.list()
							.title('Pages')
							.id('pages')
							.items([
								S.listItem()
									.id('home')
									.title('Home')
									.icon(EarthGlobeIcon)
									.child(S.document().schemaType('seo').documentId('home').title('Home Page')),
								S.listItem()
									.title('Contact')
									.id('contact')
									.icon(EarthGlobeIcon)
									.child(S.document().schemaType('seo').documentId('contact').title('Contact Page'))
							])
					),
				S.documentTypeListItem('blogs').title('Blogs').icon(ComposeIcon),
				S.documentTypeListItem('portfolioImages').title('Portfolio Images').icon(ImagesIcon),
				S.documentTypeListItem('reviews').title('Reviews').icon(StarIcon)
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
		types: [blogPosts, reviews, bio, portfolioImages, separatorImages, seo]
	},

	document: {
		// For singleton types, filter out actions that are not explicitly included
		// in the `singletonActions` list defined above
		actions: (input, context) =>
			singletonTypes.has(context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input
	}
});
