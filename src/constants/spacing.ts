/**
 * Spacing Scale - Consistent spacing system for Idiom Master
 * Based on 4px base unit with harmonious progression
 * Designed for clear hierarchy and comfortable reading experience
 */

// Base spacing scale following 4px grid system
export const spacing = {
  // Micro spacing - for tight elements and borders
  xxs: 2,   // 2px - Minimal spacing, borders, dividers
  xs: 4,    // 4px - Small padding, tight spacing

  // Small spacing - for compact elements
  sm: 8,    // 8px - Small padding, list item spacing

  // Medium spacing - most common usage
  md: 16,   // 16px - Standard padding, card spacing

  // Large spacing - for generous whitespace
  lg: 24,   // 24px - Section spacing, larger padding
  xl: 32,   // 32px - Major section spacing, screen padding
  xxl: 48,  // 48px - Large gaps, major component separation

  // Extra large spacing - for significant separation
  xxxl: 64, // 64px - Very large gaps, major layout spacing
  xxxxl: 80, // 80px - Maximum spacing for major sections
} as const;

// Component-specific spacing presets for common UI patterns
export const componentSpacing = {
  // Card spacing
  card: {
    padding: spacing.md,      // 16px - Standard card padding
    margin: spacing.sm,       // 8px - Space between cards
    borderRadius: spacing.sm, // 8px - Card border radius
  },

  // Button spacing
  button: {
    paddingHorizontal: spacing.lg,  // 24px - Button horizontal padding
    paddingVertical: spacing.sm,    // 8px - Button vertical padding
    marginVertical: spacing.xs,     // 4px - Space between buttons
    borderRadius: spacing.xs,       // 4px - Button border radius
  },

  // List spacing
  list: {
    itemPadding: spacing.md,        // 16px - List item padding
    itemMargin: spacing.xs,         // 4px - Space between list items
    sectionMargin: spacing.xl,      // 32px - Space between list sections
  },

  // Screen spacing
  screen: {
    paddingHorizontal: spacing.md,  // 16px - Screen horizontal padding
    paddingVertical: spacing.lg,    // 24px - Screen vertical padding
    headerMargin: spacing.xl,       // 32px - Space below screen header
  },

  // Form spacing
  form: {
    fieldMargin: spacing.md,        // 16px - Space between form fields
    groupMargin: spacing.lg,        // 24px - Space between form groups
    labelMargin: spacing.xs,        // 4px - Space between label and input
  },

  // Learning app specific spacing
  idiom: {
    cardPadding: spacing.md,        // 16px - Idiom card internal padding
    cardMargin: spacing.sm,         // 8px - Space between idiom cards
    sectionSpacing: spacing.lg,     // 24px - Space between idiom sections
    exampleIndent: spacing.lg,      // 24px - Indentation for examples
  },

  // Progress and achievement spacing
  progress: {
    barHeight: spacing.xs,          // 4px - Progress bar height
    barMargin: spacing.sm,          // 8px - Space around progress bar
    achievementSpacing: spacing.md, // 16px - Space between achievements
  },

  // Navigation spacing
  navigation: {
    tabPadding: spacing.sm,         // 8px - Tab padding
    tabBarPadding: spacing.xs,      // 4px - Tab bar padding
    headerPadding: spacing.md,      // 16px - Header padding
  },
} as const;

// Layout spacing for different screen breakpoints
export const layoutSpacing = {
  // Mobile layout spacing (default)
  mobile: {
    screenMargin: spacing.md,       // 16px - Screen margins
    contentMaxWidth: '100%',        // Full width on mobile
    sectionSpacing: spacing.xl,     // 32px - Section spacing
  },

  // Tablet layout spacing
  tablet: {
    screenMargin: spacing.xl,       // 32px - Larger screen margins
    contentMaxWidth: 768,           // Max content width
    sectionSpacing: spacing.xxl,    // 48px - Larger section spacing
  },

  // Desktop layout spacing
  desktop: {
    screenMargin: spacing.xxl,      // 48px - Even larger margins
    contentMaxWidth: 1024,          // Max content width
    sectionSpacing: spacing.xxxl,   // 64px - Largest section spacing
  },
} as const;

// Spacing utility functions
export const spacingUtils = {
  // Get spacing value by key
  get: (key: keyof typeof spacing): number => spacing[key],

  // Calculate responsive spacing based on screen size
  responsive: (baseSize: keyof typeof spacing, multiplier: number = 1): number =>
    spacing[baseSize] * multiplier,

  // Get component spacing by component and property
  getComponent: (component: keyof typeof componentSpacing, property: string): number => {
    const comp = componentSpacing[component] as Record<string, number>;
    return comp[property] || spacing.md;
  },
} as const;

// Export spacing types
export type SpacingKey = keyof typeof spacing;
export type ComponentSpacingKey = keyof typeof componentSpacing;
export type LayoutSpacingKey = keyof typeof layoutSpacing;

export default spacing;