import { SideNavItem } from '../_core/components/side-nav/side-nav-item.model';
import { ROUTES_CONFIG } from '../_core/routes.config';

export const _NAVIGATION_CONFIG: Array<SideNavItem> = [
	{
		name: 'Form Elements',
		children: getChildren()
	}
];

function getChildren(): Array<SideNavItem> {
	return [
		{
			name: 'Dropdown',
			route: ROUTES_CONFIG.formElements.dropdown.url()
		}
	];
}
