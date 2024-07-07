// @ts-ignore
export const imgParser = async (files) => {
	// @ts-ignore
	const arrayBuffer = files.map((x) => x.arrayBuffer());

	// @ts-ignore
	const settled = (await Promise.allSettled(arrayBuffer)).map((x) => x.value);

	const buffer = settled.map((x) => Buffer.from(x));

	// @ts-ignore
	const attachments = files.map((x, i) => ({
		filename: x.name,
		content: buffer[i],
		contentType: 'image/png'
	}));

	return attachments;
};
