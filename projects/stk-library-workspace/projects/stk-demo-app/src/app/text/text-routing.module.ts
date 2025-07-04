import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from '../_core/routes.config';
import { TextDecryptedPageComponent } from './text-decrypted-page/text-decrypted-page.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ROUTES_CONFIG.text.textDecrypred.path
	},
	{
		path: ROUTES_CONFIG.text.textDecrypred.path,
		component: TextDecryptedPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TextRoutingModule {}
