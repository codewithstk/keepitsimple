export const _ROUTES_CONFIG = {
	path: 'elements',
	url: elementsUrl,
	badges: {
		path: 'badges',
		url: badgesUrl
	}
};

function elementsUrl() {
	return `/${_ROUTES_CONFIG.path}`;
}

function badgesUrl() {
	return `${elementsUrl()}/${_ROUTES_CONFIG.badges.path}`;
}
