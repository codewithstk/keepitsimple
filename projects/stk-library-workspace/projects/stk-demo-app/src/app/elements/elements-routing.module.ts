import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from '../_core/routes.config';
import { BadgesComponent } from './badges/badges.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ROUTES_CONFIG.elements.badges.path
	},
	{
		path: ROUTES_CONFIG.elements.badges.path,
		component: BadgesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ElementsRoutingModule {}
