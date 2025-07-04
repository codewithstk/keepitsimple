import { SideNavItem } from '../_core/components/side-nav/side-nav-item.model';
import { ROUTES_CONFIG } from '../_core/routes.config';

export const _NAVIGATION_CONFIG: Array<SideNavItem> = [
	{
		name: 'Utilities',
		route: ROUTES_CONFIG.utilities.url()
	}
];
