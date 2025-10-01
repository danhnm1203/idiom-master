/**
 * Typography System - Readable and accessible typography for Idiom Master
 * Optimized for English learning with clear hierarchy and excellent readability
 * Based on Material Design 3 typography scale with learning app optimizations
 */

import { Platform } from 'react-native';

// Font weights with cross-platform compatibility
export const fontWeights = {
  light: Platform.select({
    ios: '300',
    android: '300',
    web: '300',
    default: 'normal',
  }) as any,
  normal: Platform.select({
    ios: '400',
    android: '400',
    web: '400',
    default: 'normal',
  }) as any,
  medium: Platform.select({
    ios: '500',
    android: '500',
    web: '500',
    default: 'normal',
  }) as any,
  semibold: Platform.select({
    ios: '600',
    android: '600',
    web: '600',
    default: 'normal',
  }) as any,
  bold: Platform.select({
    ios: '700',
    android: '700',
    web: '700',
    default: 'bold',
  }) as any,
  extrabold: Platform.select({
    ios: '800',
    android: '800',
    web: '800',
    default: 'bold',
  }) as any,
} as const;

// Font families optimized for readability across platforms
export const fontFamilies = Platform.select({
  ios: {
    // iOS system fonts optimized for readability
    primary: 'SF Pro Text',           // Primary text font
    display: 'SF Pro Display',        // Large text and headers
    rounded: 'SF Pro Rounded',        // Friendly, approachable text
    mono: 'SF Mono',                  // Code and technical text
    serif: 'New York',                // Formal text when needed
  },
  android: {
    // Android system fonts
    primary: 'Roboto',                // Primary text font
    display: 'Roboto',                // Headers and large text
    rounded: 'Roboto',                // Fallback to Roboto
    mono: 'Roboto Mono',              // Monospace text
    serif: 'Noto Serif',              // Serif font for variety
  },
  web: {
    // Web-optimized font stacks
    primary: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    display: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Roboto, sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    serif: "Georgia, 'Times New Roman', serif",
  },
  default: {
    // Fallback fonts
    primary: 'sans-serif',
    display: 'sans-serif',
    rounded: 'sans-serif',
    mono: 'monospace',
    serif: 'serif',
  },
});

// Typography scale based on Material Design 3 with learning app optimizations
export const typography = {
  // Display styles - for major headings and hero text
  displayLarge: {
    fontFamily: fontFamilies.display,
    fontSize: 57,
    fontWeight: fontWeights.normal,
    lineHeight: 64,
    letterSpacing: -0.25,
  },
  displayMedium: {
    fontFamily: fontFamilies.display,
    fontSize: 45,
    fontWeight: fontWeights.normal,
    lineHeight: 52,
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: fontFamilies.display,
    fontSize: 36,
    fontWeight: fontWeights.normal,
    lineHeight: 44,
    letterSpacing: 0,
  },

  // Headline styles - for section headers and important content
  headlineLarge: {
    fontFamily: fontFamilies.primary,
    fontSize: 32,
    fontWeight: fontWeights.bold,
    lineHeight: 40,
    letterSpacing: 0,
  },
  headlineMedium: {
    fontFamily: fontFamilies.primary,
    fontSize: 28,
    fontWeight: fontWeights.semibold,
    lineHeight: 36,
    letterSpacing: 0,
  },
  headlineSmall: {
    fontFamily: fontFamilies.primary,
    fontSize: 24,
    fontWeight: fontWeights.semibold,
    lineHeight: 32,
    letterSpacing: 0,
  },

  // Title styles - for card headers and subsections
  titleLarge: {
    fontFamily: fontFamilies.primary,
    fontSize: 22,
    fontWeight: fontWeights.medium,
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: fontFamilies.primary,
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontFamily: fontFamilies.primary,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
    letterSpacing: 0.1,
  },

  // Body styles - for main content and reading
  bodyLarge: {
    fontFamily: fontFamilies.primary,
    fontSize: 16,
    fontWeight: fontWeights.normal,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  bodyMedium: {
    fontFamily: fontFamilies.primary,
    fontSize: 14,
    fontWeight: fontWeights.normal,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: fontFamilies.primary,
    fontSize: 12,
    fontWeight: fontWeights.normal,
    lineHeight: 16,
    letterSpacing: 0.4,
  },

  // Label styles - for buttons, tabs, and UI labels
  labelLarge: {
    fontFamily: fontFamilies.primary,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontFamily: fontFamilies.primary,
    fontSize: 12,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontFamily: fontFamilies.primary,
    fontSize: 11,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
} as const;

// Learning app specific typography styles
export const learningTypography = {
  // Idiom-specific typography
  idiomTitle: {
    ...typography.titleLarge,
    fontWeight: fontWeights.bold,
    color: 'inherit', // Will use theme colors
  },
  idiomText: {
    ...typography.bodyLarge,
    fontFamily: fontFamilies.rounded, // Friendly font for idioms
    fontWeight: fontWeights.medium,
    lineHeight: 28, // Extra line height for readability
  },

  // Definition and explanation text
  definition: {
    ...typography.bodyMedium,
    lineHeight: 22, // Comfortable reading
    letterSpacing: 0.3,
  },
  explanation: {
    ...typography.bodyMedium,
    fontStyle: 'italic',
    lineHeight: 22,
  },

  // Example sentences
  example: {
    ...typography.bodyMedium,
    fontFamily: fontFamilies.serif, // Serif for examples to differentiate
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  exampleHighlight: {
    ...typography.bodyMedium,
    fontWeight: fontWeights.semibold,
    backgroundColor: 'rgba(103, 80, 164, 0.1)', // Light primary color highlight
  },

  // Progress and achievement text
  progressLabel: {
    ...typography.labelMedium,
    fontWeight: fontWeights.semibold,
  },
  achievementTitle: {
    ...typography.titleMedium,
    fontWeight: fontWeights.bold,
  },
  achievementDescription: {
    ...typography.bodySmall,
    lineHeight: 18,
  },

  // Interactive elements
  buttonText: {
    ...typography.labelLarge,
    fontWeight: fontWeights.semibold,
  },
  linkText: {
    ...typography.bodyMedium,
    fontWeight: fontWeights.medium,
    textDecorationLine: 'underline',
  },

  // Error and status messages
  errorText: {
    ...typography.bodySmall,
    fontWeight: fontWeights.medium,
    lineHeight: 18,
  },
  successText: {
    ...typography.bodySmall,
    fontWeight: fontWeights.medium,
    lineHeight: 18,
  },

  // Navigation and headers
  tabLabel: {
    ...typography.labelMedium,
    fontWeight: fontWeights.semibold,
  },
  screenTitle: {
    ...typography.headlineMedium,
    fontWeight: fontWeights.bold,
  },
  sectionHeader: {
    ...typography.titleLarge,
    fontWeight: fontWeights.semibold,
  },
} as const;

// Typography utility functions
export const typographyUtils = {
  // Get typography style by key
  get: (key: keyof typeof typography) => typography[key],

  // Get learning-specific typography
  getLearning: (key: keyof typeof learningTypography) => learningTypography[key],

  // Create custom typography style
  create: (baseStyle: keyof typeof typography, overrides: Partial<any>) => ({
    ...typography[baseStyle],
    ...overrides,
  }),

  // Responsive font size calculation
  responsive: (baseSize: number, scaleFactor: number = 1): number =>
    Math.round(baseSize * scaleFactor),
} as const;

// Export types
export type TypographyKey = keyof typeof typography;
export type LearningTypographyKey = keyof typeof learningTypography;
export type FontWeightKey = keyof typeof fontWeights;
export type FontFamilyKey = keyof typeof fontFamilies;

// Legacy aliases for backwards compatibility (matching claude.md requirements)
export const legacyTypography = {
  h1: typography.headlineLarge,
  h2: typography.headlineMedium,
  h3: typography.headlineSmall,
  body: typography.bodyLarge,
  caption: typography.bodySmall,
  label: typography.labelLarge,
} as const;

export default typography;