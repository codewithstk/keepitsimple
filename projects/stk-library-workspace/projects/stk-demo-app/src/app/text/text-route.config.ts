export const _ROUTES_CONFIG = {
	path: 'text',
	url: textUrl,
	textDecrypred: {
		path: 'text-decrypred',
		url: textDecrypredUrl
	}
};

function textUrl() {
	return `/${_ROUTES_CONFIG.path}`;
}

function textDecrypredUrl() {
	return `${textUrl()}/${_ROUTES_CONFIG.textDecrypred.path}`;
}
