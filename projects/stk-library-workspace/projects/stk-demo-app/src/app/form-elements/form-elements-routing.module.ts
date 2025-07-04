import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from '../_core/routes.config';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ROUTES_CONFIG.formElements.dropdown.path
	},
	{
		path: ROUTES_CONFIG.formElements.dropdown.path,
		component: DropdownComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FormElementsRoutingModule {}
