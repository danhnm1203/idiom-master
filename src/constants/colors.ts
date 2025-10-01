/**
 * Color Palette - Material Design 3 inspired colors for Idiom Master
 * Optimized for English learning app with excellent contrast ratios
 * Colors chosen to enhance readability and inspire learning confidence
 */

// Material Design 3 Color Tokens - Light Theme
export const lightColors = {
  // Primary colors - Inspiring purple for learning and achievement
  primary: '#6750A4',        // Deep purple for primary actions
  onPrimary: '#FFFFFF',      // White text on primary
  primaryContainer: '#EADDFF', // Light purple container
  onPrimaryContainer: '#21005D', // Dark purple text on light container

  // Secondary colors - Complementary teal for secondary elements
  secondary: '#625B71',      // Muted purple-gray
  onSecondary: '#FFFFFF',    // White text on secondary
  secondaryContainer: '#E8DEF8', // Light purple-gray container
  onSecondaryContainer: '#1D192B', // Dark text on light container

  // Tertiary colors - Warm accent for highlights and success states
  tertiary: '#7D5260',       // Warm rose for tertiary elements
  onTertiary: '#FFFFFF',     // White text on tertiary
  tertiaryContainer: '#FFD8E4', // Light rose container
  onTertiaryContainer: '#31111D', // Dark text on light container

  // Error colors - Clear red for errors and warnings
  error: '#BA1A1A',          // Material red for errors
  onError: '#FFFFFF',        // White text on error
  errorContainer: '#FFDAD6', // Light red container
  onErrorContainer: '#410002', // Dark red text on light container

  // Success colors - Green for achievements and completed tasks
  success: '#006A6B',        // Teal green for success states
  onSuccess: '#FFFFFF',      // White text on success
  successContainer: '#6FF7F8', // Light teal container
  onSuccessContainer: '#002020', // Dark text on light container

  // Warning colors - Orange for warnings and important information
  warning: '#8C5000',        // Orange for warnings
  onWarning: '#FFFFFF',      // White text on warning
  warningContainer: '#FFDCC0', // Light orange container
  onWarningContainer: '#2D1600', // Dark text on light container

  // Background colors
  background: '#FFFBFE',     // Primary background (warm white)
  onBackground: '#1C1B1F',   // Text on background
  surface: '#FFFBFE',        // Surface background
  onSurface: '#1C1B1F',      // Text on surface
  surfaceVariant: '#E7E0EC', // Variant surface (light gray-purple)
  onSurfaceVariant: '#49454F', // Text on variant surface

  // Outline and border colors
  outline: '#79747E',        // Standard outline
  outlineVariant: '#CAC4D0', // Lighter outline variant

  // Inverse colors for high contrast elements
  inverseSurface: '#313033', // Dark surface for inverse elements
  inverseOnSurface: '#F4EFF4', // Light text on dark surface
  inversePrimary: '#D0BCFF',  // Light primary for dark backgrounds

  // Text colors with semantic meaning
  text: '#1C1B1F',          // Primary text
  textSecondary: '#49454F',  // Secondary text (less prominent)
  textTertiary: '#79747E',   // Tertiary text (least prominent)
  textDisabled: '#9E9E9E',   // Disabled text

  // Learning app specific colors
  idiomCard: '#FFFFFF',      // Background for idiom cards
  definitionCard: '#F8F5FF', // Background for definition cards
  exampleCard: '#FFF8F5',    // Background for example cards
  progressBar: '#6750A4',    // Progress bar color
  achievementGold: '#FFD700', // Gold for achievements
  achievementSilver: '#C0C0C0', // Silver for achievements
  achievementBronze: '#CD7F32', // Bronze for achievements
} as const;

// Material Design 3 Color Tokens - Dark Theme
export const darkColors = {
  // Primary colors
  primary: '#D0BCFF',        // Light purple for dark theme
  onPrimary: '#381E72',      // Dark purple text on light primary
  primaryContainer: '#4F378B', // Medium purple container
  onPrimaryContainer: '#EADDFF', // Light text on dark container

  // Secondary colors
  secondary: '#CCC2DC',      // Light purple-gray
  onSecondary: '#332D41',    // Dark text on light secondary
  secondaryContainer: '#4A4458', // Dark purple-gray container
  onSecondaryContainer: '#E8DEF8', // Light text on dark container

  // Tertiary colors
  tertiary: '#EFB8C8',       // Light rose
  onTertiary: '#492532',     // Dark text on light tertiary
  tertiaryContainer: '#633B48', // Dark rose container
  onTertiaryContainer: '#FFD8E4', // Light text on dark container

  // Error colors
  error: '#FFB4AB',          // Light red for dark theme
  onError: '#690005',        // Dark red text on light error
  errorContainer: '#93000A', // Dark red container
  onErrorContainer: '#FFDAD6', // Light text on dark container

  // Success colors
  success: '#4FDDDE',        // Light teal for dark theme
  onSuccess: '#003738',      // Dark text on light success
  successContainer: '#004F50', // Dark teal container
  onSuccessContainer: '#6FF7F8', // Light text on dark container

  // Warning colors
  warning: '#FFB870',        // Light orange for dark theme
  onWarning: '#4A2800',      // Dark text on light warning
  warningContainer: '#6B3C00', // Dark orange container
  onWarningContainer: '#FFDCC0', // Light text on dark container

  // Background colors
  background: '#1C1B1F',     // Primary dark background
  onBackground: '#E6E1E5',   // Light text on dark background
  surface: '#1C1B1F',        // Dark surface
  onSurface: '#E6E1E5',      // Light text on dark surface
  surfaceVariant: '#49454F', // Dark variant surface
  onSurfaceVariant: '#CAC4D0', // Light text on dark variant

  // Outline and border colors
  outline: '#938F99',        // Lighter outline for dark theme
  outlineVariant: '#49454F', // Darker outline variant

  // Inverse colors
  inverseSurface: '#E6E1E5', // Light surface for inverse elements
  inverseOnSurface: '#313033', // Dark text on light surface
  inversePrimary: '#6750A4',  // Dark primary for light backgrounds

  // Text colors with semantic meaning
  text: '#E6E1E5',          // Primary light text
  textSecondary: '#CAC4D0',  // Secondary light text
  textTertiary: '#938F99',   // Tertiary light text
  textDisabled: '#6E6E6E',   // Disabled text

  // Learning app specific colors
  idiomCard: '#2B2930',      // Dark background for idiom cards
  definitionCard: '#252030', // Dark background for definition cards
  exampleCard: '#302B26',    // Dark background for example cards
  progressBar: '#D0BCFF',    // Light progress bar for dark theme
  achievementGold: '#FFD700', // Gold (same in both themes)
  achievementSilver: '#C0C0C0', // Silver (same in both themes)
  achievementBronze: '#CD7F32', // Bronze (same in both themes)
} as const;

// Color utility types
export type LightColorKey = keyof typeof lightColors;
export type DarkColorKey = keyof typeof darkColors;
export type ColorPalette = typeof lightColors | typeof darkColors;

// Export combined color palette
export const colors = {
  light: lightColors,
  dark: darkColors,
} as const;

export default colors;