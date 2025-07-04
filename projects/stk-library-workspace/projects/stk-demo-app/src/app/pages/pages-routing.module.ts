import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from '../_core/routes.config';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ROUTES_CONFIG.pages.pageNotFound.path
	},
	{
		path: ROUTES_CONFIG.pages.pageNotFound.path,
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {}
