import * as formElements from '../form-elements/form-elements-navigation.config';
import * as components from '../components/components-navigation.config';
import * as elements from '../elements/elements-navigation.config';
import * as icons from '../icons/icons-navigation.config';
import * as charts from '../charts/charts-navigation.config';
import * as pages from '../pages/pages-navigation.config';
import * as utilities from '../utilities/utilities-navigation.config';
import * as text from '../text/text-navigation.config';
import { SideNavItem } from './components/side-nav/side-nav-item.model';

export const NAVIGATION_CONFIG: Array<SideNavItem> = [
	...components._NAVIGATION_CONFIG,
	...formElements._NAVIGATION_CONFIG,
	...elements._NAVIGATION_CONFIG,
	...icons._NAVIGATION_CONFIG,
	...charts._NAVIGATION_CONFIG,
	...pages._NAVIGATION_CONFIG,
	...utilities._NAVIGATION_CONFIG,
	...text._NAVIGATION_CONFIG
];
