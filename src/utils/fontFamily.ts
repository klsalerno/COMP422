/**
 * Defines a function to get the correct font
 * 
 * Basis of code from Noam Kurtzer's Medium article:
 * https://medium.com/@noamkurtzer/custom-fonts-in-react-native-app-7d07310f75e8
 */

import { fontFamilies } from '../constants/fonts';

export const getFontFamily = (isLTR: boolean, weight) => {
	const selectedFontFamily = isLTR
	? fontFamilies.GAMJA_FLOWER
	: fontFamilies.SOURCE_SANS3;
	const font = selectedFontFamily[weight];
	return selectedFontFamily[weight];
};