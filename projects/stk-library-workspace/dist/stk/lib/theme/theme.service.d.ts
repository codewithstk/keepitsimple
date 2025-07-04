import { ThemeKeys } from './theme-keys.enum';
import * as i0 from '@angular/core';
export declare class StkThemeService {
	private document;
	private _selectedThemeKey;
	constructor(document: Document);
	get selectedThemeKey(): ThemeKeys;
	setTheme(name: ThemeKeys): void;
	static ɵfac: i0.ɵɵFactoryDeclaration<StkThemeService, never>;
	static ɵprov: i0.ɵɵInjectableDeclaration<StkThemeService>;
}
//# sourceMappingURL=theme.service.d.ts.map
