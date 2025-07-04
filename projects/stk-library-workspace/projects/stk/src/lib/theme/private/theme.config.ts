import { IThemeColors } from './theme-colors/theme-colors.interface';
import { base } from './base.variables';
import { colors } from './theme-colors/ceramicartmontaj.theme';
import { validateVariables } from './theme-validation';
import { ThemeKeys } from '../theme-keys.enum';

const ceramicartmontaj: IThemeColors = {
	...base,
	...colors
};

validateVariables(ceramicartmontaj);

export const THEMES: Record<ThemeKeys, IThemeColors> = {
	[ThemeKeys.CeramicArtMontaj]: ceramicartmontaj
};
