// credits to https://stackoverflow.com/a/58550111
const isNumeric = (value: unknown) =>
	(
		typeof value === 'number' ||
		(typeof value === 'string' && value.trim() !== '')
	) && !isNaN(value as number);