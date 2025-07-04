import { Routes } from '@angular/router';
import { ROUTES_CONFIG } from './_core/routes.config';

export const routes: Routes = [
	{
		path: ROUTES_CONFIG.components.path,
		loadChildren: () =>
			import('./components/components.module').then(m => m.ComponentsModule)
	},
	{
		path: ROUTES_CONFIG.formElements.path,
		loadChildren: () =>
			import('./form-elements/form-elements.module').then(
				m => m.FormElementsModule
			)
	},
	{
		path: ROUTES_CONFIG.elements.path,
		loadChildren: () =>
			import('./elements/elements.module').then(m => m.ElementsModule)
	},
	{
		path: ROUTES_CONFIG.charts.path,
		loadChildren: () =>
			import('./charts/charts.module').then(m => m.ChartsModule)
	},
	{
		path: ROUTES_CONFIG.icons.path,
		loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
	},
	{
		path: ROUTES_CONFIG.pages.path,
		loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
	},
	{
		path: ROUTES_CONFIG.utilities.path,
		loadChildren: () =>
			import('./utilities/utilities.module').then(m => m.UtilitiesModule)
	},
	{
		path: ROUTES_CONFIG.text.path,
		loadChildren: () => import('./text/text.module').then(m => m.TextsModule)
	}
];
