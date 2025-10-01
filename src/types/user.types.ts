/**
 * User Types - User profile, progress tracking, and achievement system
 * For the Idiom Master English learning app
 */

// Achievement type definitions
export type AchievementType =
  | 'learning'      // Related to learning idioms
  | 'practice'      // Related to practice sessions
  | 'streak'        // Related to daily streaks
  | 'quiz'          // Related to quiz performance
  | 'special';      // Special achievements

export type AchievementRarity = 'common' | 'rare' | 'legendary';

// Achievement interface
export interface Achievement {
  /** Unique identifier for the achievement */
  id: string;

  /** Display name of the achievement */
  name: string;

  /** Description of how to earn this achievement */
  description: string;

  /** Icon identifier for the achievement */
  icon: string;

  /** Type of achievement */
  type: AchievementType;

  /** Rarity level */
  rarity: AchievementRarity;

  /** XP points awarded for earning this achievement */
  xpReward: number;

  /** Requirements to unlock this achievement */
  requirements: {
    /** Minimum number of idioms learned */
    idiomsLearned?: number;
    /** Minimum streak length */
    streakDays?: number;
    /** Minimum quiz score percentage */
    quizAccuracy?: number;
    /** Minimum total XP */
    totalXP?: number;
    /** Specific actions required */
    actions?: string[];
  };

  /** When this achievement was unlocked (undefined if not unlocked) */
  unlockedAt?: Date;

  /** Progress towards earning this achievement (0-1) */
  progress?: number;

  /** Whether this is a hidden achievement */
  isHidden?: boolean;
}

// Quiz result interface
export interface QuizResult {
  /** Unique identifier for this quiz session */
  id: string;

  /** When the quiz was taken */
  date: Date;

  /** Number of correct answers */
  score: number;

  /** Total number of questions */
  totalQuestions: number;

  /** Time taken to complete quiz (in seconds) */
  timeSpent: number;

  /** XP points earned from this quiz */
  xpEarned: number;

  /** Type of quiz taken */
  quizType: 'multiple-choice' | 'fill-blank' | 'match-situation' | 'audio' | 'mixed';

  /** Difficulty level of the quiz */
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'mixed';

  /** Categories of idioms in this quiz */
  categories: string[];

  /** Detailed answers for review */
  answers: {
    questionId: string;
    idiomId: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    timeSpent: number;
  }[];

  /** Whether this was a perfect score */
  isPerfect: boolean;
}

// Learning statistics interface
export interface LearningStats {
  /** Total time spent learning (in minutes) */
  totalTimeSpent: number;

  /** Average session length (in minutes) */
  averageSessionLength: number;

  /** Most active learning hour (0-23) */
  mostActiveHour: number;

  /** Learning sessions this week */
  sessionsThisWeek: number;

  /** Learning sessions this month */
  sessionsThisMonth: number;

  /** Favorite categories */
  favoriteCategories: string[];

  /** Quiz accuracy by difficulty */
  accuracyByDifficulty: {
    beginner: number;
    intermediate: number;
    advanced: number;
  };

  /** Learning velocity (idioms per week) */
  learningVelocity: number;
}

// User preferences interface
export interface UserPreferences {
  /** Preferred theme */
  theme: 'light' | 'dark' | 'auto';

  /** Daily reminder notifications */
  dailyReminders: boolean;

  /** Time for daily reminders */
  reminderTime: string; // HH:MM format

  /** Achievement notifications */
  achievementNotifications: boolean;

  /** Sound effects enabled */
  soundEffects: boolean;

  /** Auto-play audio for idioms */
  autoPlayAudio: boolean;

  /** Preferred difficulty for new content */
  preferredDifficulty: 'beginner' | 'intermediate' | 'advanced' | 'adaptive';

  /** Number of daily practice goals */
  dailyGoal: number;

  /** Preferred categories for practice */
  preferredCategories: string[];
}

// Main user progress interface
export interface UserProgress {
  /** Unique user identifier */
  userId: string;

  /** Current level (calculated from XP) */
  level: number;

  /** Current experience points */
  xp: number;

  /** XP needed for next level */
  xpToNextLevel: number;

  /** Current learning streak (consecutive days) */
  streak: number;

  /** Longest streak achieved */
  longestStreak: number;

  /** Last date user was active */
  lastActive: Date;

  /** Date user joined */
  joinedDate: Date;

  /** List of idiom IDs user has learned */
  learnedIdioms: string[];

  /** List of idiom IDs user has bookmarked */
  bookmarkedIdioms: string[];

  /** User's achieved achievements */
  achievements: Achievement[];

  /** History of quiz results */
  quizHistory: QuizResult[];

  /** Learning statistics */
  stats: LearningStats;

  /** User preferences */
  preferences: UserPreferences;

  /** Current daily goal progress */
  dailyProgress: {
    date: string; // YYYY-MM-DD format
    idiomsLearned: number;
    practiceTime: number; // in minutes
    quizzesTaken: number;
    goalMet: boolean;
  };

  /** Weekly progress tracking */
  weeklyProgress: {
    weekStart: string; // YYYY-MM-DD format
    idiomsLearned: number;
    totalXP: number;
    averageAccuracy: number;
    streakDays: number;
  }[];
}

// User profile interface (public information)
export interface UserProfile {
  /** User display name */
  displayName: string;

  /** Profile avatar URL */
  avatar?: string;

  /** User level */
  level: number;

  /** Total XP earned */
  totalXP: number;

  /** Current streak */
  streak: number;

  /** Number of idioms learned */
  idiomsLearned: number;

  /** Visible achievements (user can choose which to display) */
  featuredAchievements: Achievement[];

  /** Join date */
  joinedDate: Date;

  /** Whether profile is public */
  isPublic: boolean;
}

// Level progression system
export interface LevelInfo {
  level: number;
  xpRequired: number;
  title: string;
  description: string;
  rewards: {
    type: 'feature' | 'cosmetic' | 'boost';
    name: string;
    description: string;
  }[];
}

// All types are already exported above via direct export declarations