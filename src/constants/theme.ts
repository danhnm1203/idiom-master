/**
 * Theme System - Complete design system for Idiom Master English Learning App
 * Based on Material Design 3 principles with educational app optimizations
 * Provides comprehensive theming for light and dark modes
 */

import { colors, lightColors, darkColors } from './colors';
import { spacing, componentSpacing, layoutSpacing } from './spacing';
import { typography, learningTypography, fontFamilies, fontWeights } from './typography';

// Color palette type that both light and dark colors conform to
type ColorPalette = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  success: string;
  onSuccess: string;
  successContainer: string;
  onSuccessContainer: string;
  warning: string;
  onWarning: string;
  warningContainer: string;
  onWarningContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  textDisabled: string;
  idiomCard: string;
  definitionCard: string;
  exampleCard: string;
  progressBar: string;
  achievementGold: string;
  achievementSilver: string;
  achievementBronze: string;
};

// Theme interface defining the structure of our theme system
export interface Theme {
  colors: ColorPalette;
  spacing: typeof spacing;
  typography: typeof typography;
  learningTypography: typeof learningTypography;
  componentSpacing: typeof componentSpacing;
  layoutSpacing: typeof layoutSpacing;
  fontFamilies: typeof fontFamilies;
  fontWeights: typeof fontWeights;
  name: 'light' | 'dark';
}

// Light theme - optimized for daytime learning and focus
export const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  typography,
  learningTypography,
  componentSpacing,
  layoutSpacing,
  fontFamilies,
  fontWeights,
  name: 'light',
};

// Dark theme - optimized for evening learning and reduced eye strain
export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  typography,
  learningTypography,
  componentSpacing,
  layoutSpacing,
  fontFamilies,
  fontWeights,
  name: 'dark',
};

// Theme collection
export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

// Theme type definitions
export type ThemeName = keyof typeof themes;
export type ThemeColors = Theme['colors'];
export type ThemeSpacing = Theme['spacing'];
export type ThemeTypography = Theme['typography'];

// Legacy Colors export for backwards compatibility
export const Colors = {
  light: {
    text: lightColors.text,
    background: lightColors.background,
    tint: lightColors.primary,
    icon: lightColors.textSecondary,
    tabIconDefault: lightColors.textTertiary,
    tabIconSelected: lightColors.primary,
  },
  dark: {
    text: darkColors.text,
    background: darkColors.background,
    tint: darkColors.primary,
    icon: darkColors.textSecondary,
    tabIconDefault: darkColors.textTertiary,
    tabIconSelected: darkColors.primary,
  },
};

// Legacy Fonts export for backwards compatibility
export const Fonts = fontFamilies;

// Default theme (light theme)
export const defaultTheme = lightTheme;

// Theme utility functions
export const themeUtils = {
  // Get theme by name
  getTheme: (themeName: ThemeName): Theme => themes[themeName],

  // Get opposite theme
  getOppositeTheme: (currentTheme: ThemeName): Theme =>
    themes[currentTheme === 'light' ? 'dark' : 'light'],

  // Check if theme is dark
  isDark: (themeName: ThemeName): boolean => themeName === 'dark',

  // Get color from current theme
  getColor: (themeName: ThemeName, colorKey: keyof ThemeColors): string =>
    themes[themeName].colors[colorKey],

  // Get spacing value
  getSpacing: (spacingKey: keyof ThemeSpacing): number =>
    spacing[spacingKey],

  // Get typography style
  getTypography: (typographyKey: keyof ThemeTypography) =>
    typography[typographyKey],

  // Create custom color with opacity
  withOpacity: (color: string, opacity: number): string => {
    // Handle hex colors
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
      return `#${hex}${alpha}`;
    }
    // Handle rgb/rgba colors
    if (color.startsWith('rgb')) {
      return color.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`);
    }
    return color;
  },

  // Get semantic colors for common use cases
  getSemanticColors: (themeName: ThemeName) => {
    const theme = themes[themeName];
    return {
      // Status colors
      success: theme.colors.success,
      warning: theme.colors.warning,
      error: theme.colors.error,
      info: theme.colors.primary,

      // Content colors
      primary: theme.colors.text,
      secondary: theme.colors.textSecondary,
      tertiary: theme.colors.textTertiary,
      disabled: theme.colors.textDisabled,

      // Background colors
      background: theme.colors.background,
      surface: theme.colors.surface,
      surfaceVariant: theme.colors.surfaceVariant,

      // Interactive colors
      interactive: theme.colors.primary,
      interactiveHover: theme.colors.primaryContainer,
      interactiveDisabled: theme.colors.textDisabled,
    };
  },
} as const;

// Export everything for easy access
export {
  colors,
  spacing,
  typography,
  learningTypography,
  fontFamilies,
  fontWeights,
  componentSpacing,
  layoutSpacing,
};
