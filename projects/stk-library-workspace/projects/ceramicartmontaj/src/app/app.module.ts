import { NgModule, inject, provideAppInitializer } from '@angular/core';
import {
	BrowserModule,
	provideClientHydration,
	withEventReplay
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { PortfolioComponent } from './pages/projects/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import {
	BrowserAnimationsModule,
	provideAnimations
} from '@angular/platform-browser/animations';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import {
	provideHttpClient,
	withInterceptorsFromDi
} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {
	StkBtnScrollToTopComponent,
	StkAccordionModule,
	StkIconComponent,
	StkThemeService,
	StkWindowSectionScrollSpyDirective,
	ThemeKeys
} from '../../../stk/src/public-api';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CardComponent,
		FooterComponent,
		SectionTitleComponent,
		PortfolioComponent,
		AboutComponent,
		ContactComponent,
		ServicesComponent,
		FaqComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		StkBtnScrollToTopComponent,
		StkWindowSectionScrollSpyDirective,
		StkIconComponent,
		StkAccordionModule,
		RouterModule.forRoot(routes)
	],
	bootstrap: [AppComponent],
	providers: [
		provideHttpClient(withInterceptorsFromDi()),
		provideAnimations(),
		provideAppInitializer(() => {
			const initializerFn = setupTheme(inject(StkThemeService));
			return initializerFn();
		}),
		provideClientHydration(withEventReplay())
	]
})
export class AppModule {}

function setupTheme(themeService: StkThemeService) {
	return () => {
		return new Promise<void>((resolve, _reject) => {
			themeService.setTheme(ThemeKeys.CeramicArtMontaj);
			resolve();
		});
	};
}
