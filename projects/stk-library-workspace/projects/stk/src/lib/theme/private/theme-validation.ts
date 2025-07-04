import { IThemeColors } from './theme-colors/theme-colors.interface';

export function validateVariables(theme: IThemeColors) {
	for (const key in theme) {
		if (theme.hasOwnProperty(key)) {
			const value = theme[key as keyof IThemeColors];
			const variables = value
				.split('var(--')
				.slice(1)
				.map(v => v.split(')')[0]);

			for (const variable of variables) {
				if (!theme.hasOwnProperty(variable)) {
					throw new Error(
						`Invalid variable "${variable}" in property "${key}".`
					);
				}
			}
		}
	}
}
