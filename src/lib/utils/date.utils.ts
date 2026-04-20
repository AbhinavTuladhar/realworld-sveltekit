export const convertToStandardDate = (dateString: string) =>
	new Date(dateString).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
