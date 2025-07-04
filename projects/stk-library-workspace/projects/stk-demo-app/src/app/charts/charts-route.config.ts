export const _ROUTES_CONFIG = {
	path: 'charts',
	url: chartsUrl,
	pieChart: {
		path: 'pie-chart',
		url: pieChartUrl
	}
};

function chartsUrl() {
	return `/${_ROUTES_CONFIG.path}`;
}

function pieChartUrl() {
	return `${chartsUrl()}/${_ROUTES_CONFIG.pieChart.path}`;
}
