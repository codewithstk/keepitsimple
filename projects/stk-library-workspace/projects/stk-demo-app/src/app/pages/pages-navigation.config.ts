import { SideNavItem } from '../_core/components/side-nav/side-nav-item.model';
import { ROUTES_CONFIG } from '../_core/routes.config';

export const _NAVIGATION_CONFIG: Array<SideNavItem> = [
	{
		name: 'Pages',
		children: getChildren()
	}
];

function getChildren(): Array<SideNavItem> {
	return [
		{
			name: 'Page not found',
			route: ROUTES_CONFIG.pages.pageNotFound.url()
		}
	];
}
