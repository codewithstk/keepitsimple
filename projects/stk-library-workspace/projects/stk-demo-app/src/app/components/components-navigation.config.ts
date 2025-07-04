import { SideNavItem } from '../_core/components/side-nav/side-nav-item.model';
import { ROUTES_CONFIG } from '../_core/routes.config';

export const _NAVIGATION_CONFIG: Array<SideNavItem> = [
	{
		name: 'Components',
		children: getChildren()
	}
];

function getChildren(): Array<SideNavItem> {
	return [
		{
			name: 'Accordition',
			route: ROUTES_CONFIG.components.accordition.url()
		}
	];
}
