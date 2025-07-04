export const _ROUTES_CONFIG = {
	path: 'form-elements',
	url: formElementsUrl,
	dropdown: {
		path: 'dropdown',
		url: dropdownUrl
	}
};

function formElementsUrl() {
	return `/${_ROUTES_CONFIG.path}`;
}

function dropdownUrl() {
	return `${formElementsUrl()}/${_ROUTES_CONFIG.dropdown.path}`;
}
