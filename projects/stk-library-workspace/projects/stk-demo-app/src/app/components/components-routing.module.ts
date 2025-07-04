import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from '../_core/routes.config';
import { AccordionComponent } from './accordion/accordion.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ROUTES_CONFIG.components.accordition.path
	},
	{
		path: ROUTES_CONFIG.components.accordition.path,
		component: AccordionComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ComponentsRoutingModule {}
