export const _ROUTES_CONFIG = {
	path: 'pages',
	url: pagesUrl,
	pageNotFound: {
		path: 'page-not-found',
		url: pageNotFoundUrl
	}
};

function pagesUrl() {
	return `/${_ROUTES_CONFIG.path}`;
}

function pageNotFoundUrl() {
	return `${pagesUrl()}/${_ROUTES_CONFIG.pageNotFound.path}`;
}
