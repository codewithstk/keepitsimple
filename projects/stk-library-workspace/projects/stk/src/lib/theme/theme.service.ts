import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { THEMES } from './private/theme.config';
import { IThemeColors } from './private/theme-colors/theme-colors.interface';
import { ThemeKeys } from './theme-keys.enum';

@Injectable({
	providedIn: 'root'
})
export class StkThemeService {
	private _selectedThemeKey!: ThemeKeys;

	constructor(@Inject(DOCUMENT) private document: Document) {}

	public get selectedThemeKey() {
		return this._selectedThemeKey;
	}

	public setTheme(name: ThemeKeys) {
		if (!name) {
			name = ThemeKeys.CeramicArtMontaj;
		}

		const theme = THEMES[name];
		this._selectedThemeKey = name;
		Object.keys(theme).forEach(key => {
			const themeProperty = theme[key as keyof IThemeColors];
			this.document.documentElement.style.setProperty(
				`--${key}`,
				themeProperty
			);
		});
	}
}
