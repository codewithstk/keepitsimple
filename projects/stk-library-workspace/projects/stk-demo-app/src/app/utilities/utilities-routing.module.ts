import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from '../_core/routes.config';
import { UtilitiesComponent } from './utilities/utilities.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ROUTES_CONFIG.utilities.path
	},
	{
		path: ROUTES_CONFIG.utilities.path,
		component: UtilitiesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UtilitiesRoutingModule {}
