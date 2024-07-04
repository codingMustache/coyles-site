import { createClient } from '@sanity/client';

export default createClient({
	projectId: 'mfxl6xft',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false
});
