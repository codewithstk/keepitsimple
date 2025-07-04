import {
	ApplicationConfig,
	inject,
	provideAppInitializer,
	provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { StkThemeService, ThemeKeys } from '../../../stk/src/public-api';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideAnimations(),
		provideAppInitializer(() => {
			const initializerFn = setupTheme(inject(StkThemeService));
			return initializerFn();
		})
	]
};

function setupTheme(themeService: StkThemeService) {
	return () => {
		return new Promise<void>((resolve, _reject) => {
			themeService.setTheme(ThemeKeys.CeramicArtMontaj);
			resolve();
		});
	};
}
