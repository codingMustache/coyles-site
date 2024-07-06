export const imgParser = async (files) => {
	const arrayBuffer = files.map((x) => x.arrayBuffer());

	const settled = (await Promise.allSettled(arrayBuffer)).map((x) => x.value);

	const buffer = settled.map((x) => Buffer.from(x));

	const attachments = files.map((x, i) => ({
		filename: x.name,
		content: buffer[i],
		contentType: 'image/png'
	}));

	return attachments;
};
