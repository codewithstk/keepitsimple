export const _ROUTES_CONFIG = {
	path: 'components',
	url: componentsUrl,

	accordition: {
		path: 'accordition',
		url: accorditionUrl
	},

	portfolioGrid: {
		path: 'portfolio-grid',
		url: portfolioGridUrl
	}
};

function componentsUrl() {
	return `/${_ROUTES_CONFIG.path}`;
}

function accorditionUrl() {
	return `${componentsUrl()}/${_ROUTES_CONFIG.accordition.path}`;
}

function portfolioGridUrl() {
	return `${componentsUrl()}/${_ROUTES_CONFIG.portfolioGrid.path}`;
}
