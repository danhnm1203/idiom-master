/**
 * Navigation Types - Expo Router navigation parameter lists and screen types
 * For type-safe navigation in the Idiom Master app
 */

// Root navigation structure for Expo Router
export type RootStackParamList = {
  /** Main app screens after authentication */
  '(tabs)': undefined;

  /** Modal screens */
  modal: undefined;

  /** Idiom detail screen */
  'idiom/[id]': { id: string };

  /** Quiz screen with optional parameters */
  'quiz/index': {
    type?: 'multiple-choice' | 'fill-blank' | 'match-situation' | 'audio' | 'mixed';
    difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'mixed';
    categories?: string[];
    idiomIds?: string[];
  };

  /** Quiz results screen */
  'quiz/results': {
    quizId: string;
    score: number;
    totalQuestions: number;
    xpEarned: number;
  };

  /** Settings screens */
  'settings/index': undefined;
  'settings/profile': undefined;
  'settings/notifications': undefined;
  'settings/preferences': undefined;
  'settings/about': undefined;

  /** Achievement detail screen */
  'achievement/[id]': { id: string };

  /** Onboarding screens */
  'onboarding/welcome': undefined;
  'onboarding/features': undefined;
  'onboarding/permissions': undefined;
  'onboarding/complete': undefined;

  /** Error screens */
  '+not-found': undefined;
};

// Tab navigation parameter list
export type TabParamList = {
  /** Home/Learn screen - main learning interface */
  index: undefined;

  /** Practice screen - different practice modes */
  explore: undefined;

  /** Browse screen - search and filter idioms */
  browse?: {
    category?: string;
    difficulty?: string;
    searchQuery?: string;
  };

  /** Progress screen - user stats and achievements */
  progress: undefined;

  /** Profile screen - user profile and settings */
  profile: undefined;
};

// Screen-specific parameter interfaces for better type safety

// Idiom detail screen parameters
export interface IdiomDetailParams {
  /** Idiom ID to display */
  id: string;
  /** Whether to auto-play audio on load */
  autoPlay?: boolean;
  /** Previous screen for analytics */
  source?: 'search' | 'browse' | 'related' | 'quiz' | 'random';
}

// Quiz screen parameters
export interface QuizParams {
  /** Type of quiz to start */
  type?: 'multiple-choice' | 'fill-blank' | 'match-situation' | 'audio' | 'mixed';
  /** Difficulty level */
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'mixed';
  /** Specific categories to include */
  categories?: string[];
  /** Specific idiom IDs to quiz on */
  idiomIds?: string[];
  /** Number of questions (default: 10) */
  questionCount?: number;
  /** Time limit in seconds (optional) */
  timeLimit?: number;
  /** Whether this is a practice quiz */
  isPractice?: boolean;
}

// Quiz results screen parameters
export interface QuizResultsParams {
  /** ID of the completed quiz */
  quizId: string;
  /** Score achieved */
  score: number;
  /** Total number of questions */
  totalQuestions: number;
  /** XP points earned */
  xpEarned: number;
  /** Whether new achievements were unlocked */
  newAchievements?: string[];
  /** Whether user leveled up */
  leveledUp?: boolean;
  /** New level if leveled up */
  newLevel?: number;
}

// Browse screen parameters
export interface BrowseParams {
  /** Category to filter by */
  category?: string;
  /** Difficulty to filter by */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  /** Search query */
  searchQuery?: string;
  /** Whether to show only bookmarked idioms */
  bookmarkedOnly?: boolean;
  /** Whether to show only unlearned idioms */
  unlearnedOnly?: boolean;
  /** Sort order */
  sortBy?: 'alphabetical' | 'difficulty' | 'frequency' | 'recent';
}

// Navigation action types for analytics and state management
export type NavigationAction =
  | 'navigate'
  | 'goBack'
  | 'reset'
  | 'replace'
  | 'push'
  | 'pop';

// Navigation event for tracking user flow
export interface NavigationEvent {
  /** Type of navigation action */
  action: NavigationAction;
  /** Screen navigated from */
  fromScreen: string;
  /** Screen navigated to */
  toScreen: string;
  /** Parameters passed */
  params?: Record<string, any>;
  /** Timestamp of navigation */
  timestamp: Date;
  /** User ID for analytics */
  userId?: string;
}

// Screen metadata for configuration
export interface ScreenMetadata {
  /** Screen title for header */
  title: string;
  /** Whether to show header */
  showHeader?: boolean;
  /** Header background color */
  headerColor?: string;
  /** Whether screen requires authentication */
  requiresAuth?: boolean;
  /** Whether to track this screen in analytics */
  trackAnalytics?: boolean;
  /** Custom header component */
  headerComponent?: string;
  /** Screen-specific styling */
  screenOptions?: Record<string, any>;
}

// Common navigation hook return type
export interface NavigationHookReturn {
  /** Navigate to a screen */
  navigate: (screen: keyof RootStackParamList, params?: any) => void;
  /** Go back to previous screen */
  goBack: () => void;
  /** Get current route name */
  getCurrentRoute: () => string | undefined;
  /** Check if can go back */
  canGoBack: () => boolean;
  /** Reset navigation stack */
  reset: (routes: any[]) => void;
}

// Deep linking types
export interface DeepLinkConfig {
  /** URL pattern */
  pattern: string;
  /** Screen to navigate to */
  screen: keyof RootStackParamList;
  /** Parameter mapping */
  params?: Record<string, string>;
}

// All types are already exported above via direct export declarations