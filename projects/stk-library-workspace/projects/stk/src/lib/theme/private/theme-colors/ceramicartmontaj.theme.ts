const genericColors = {
	'color-primary': 'rgba(255, 255, 255, 1)',
	'color-secondary': 'rgba(0, 0, 0, 1)',

	'color-brand': 'rgba(247, 183, 11, 1)',

	'color-neutral': 'rgba(237, 237, 237, 1)',
	'color-neutral-fill': 'rgba(217, 217, 217, 1)',
	'color-neutral-muted': 'rgba(24, 24, 27, 0.03)',
	'color-neutral-contrast': 'rgba(108, 109, 122, 1)'
};

export const colors = {
	...genericColors,

	//Specific Colors
	'text-primary': genericColors['color-secondary'],
	'text-secondary': genericColors['color-neutral-contrast']
};
