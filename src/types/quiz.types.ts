/**
 * Quiz Types - Quiz system, questions, answers, and scoring
 * For the Idiom Master English learning app quiz features
 */

import type { Category, Difficulty, Idiom } from './idiom.types';

// Quiz type definitions
export type QuizType =
  | 'multiple-choice'    // Choose correct meaning from options
  | 'fill-blank'         // Fill in missing words in sentences
  | 'match-situation'    // Match idiom to appropriate situation
  | 'audio'              // Audio-based questions
  | 'mixed';             // Combination of different types

// Question type definitions
export type QuestionType = QuizType;

// Multiple choice question interface
export interface MultipleChoiceQuestion {
  /** Unique question ID */
  id: string;
  /** Question type */
  type: 'multiple-choice';
  /** The idiom being tested */
  idiom: Idiom;
  /** Question text */
  question: string;
  /** Answer options */
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  /** Explanation for the correct answer */
  explanation?: string;
  /** Points awarded for correct answer */
  points: number;
}

// Fill in the blank question interface
export interface FillBlankQuestion {
  /** Unique question ID */
  id: string;
  /** Question type */
  type: 'fill-blank';
  /** The idiom being tested */
  idiom: Idiom;
  /** Sentence with blank(s) to fill */
  sentence: string;
  /** Correct answers (may have multiple valid answers) */
  correctAnswers: string[];
  /** Context for the sentence */
  context?: string;
  /** Hint for the user */
  hint?: string;
  /** Points awarded for correct answer */
  points: number;
}

// Match situation question interface
export interface MatchSituationQuestion {
  /** Unique question ID */
  id: string;
  /** Question type */
  type: 'match-situation';
  /** Situation description */
  situation: string;
  /** Multiple idioms to choose from */
  idiomOptions: {
    id: string;
    idiom: string;
    isCorrect: boolean;
  }[];
  /** The correct idiom for this situation */
  correctIdiom: Idiom;
  /** Explanation of why this idiom fits */
  explanation?: string;
  /** Points awarded for correct answer */
  points: number;
}

// Audio question interface
export interface AudioQuestion {
  /** Unique question ID */
  id: string;
  /** Question type */
  type: 'audio';
  /** The idiom being tested */
  idiom: Idiom;
  /** Audio file URL */
  audioUrl: string;
  /** Question text */
  question: string;
  /** Answer options */
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  /** Whether audio should auto-play */
  autoPlay: boolean;
  /** Points awarded for correct answer */
  points: number;
}

// Union type for all question types
export type QuizQuestion =
  | MultipleChoiceQuestion
  | FillBlankQuestion
  | MatchSituationQuestion
  | AudioQuestion;

// User's answer to a question
export interface QuizAnswer {
  /** Question ID */
  questionId: string;
  /** User's selected answer */
  userAnswer: string;
  /** Whether the answer is correct */
  isCorrect: boolean;
  /** Time spent on this question (seconds) */
  timeSpent: number;
  /** Timestamp when answered */
  answeredAt: Date;
  /** Points earned for this answer */
  pointsEarned: number;
}

// Quiz session configuration
export interface QuizConfig {
  /** Type of quiz */
  type: QuizType;
  /** Difficulty level */
  difficulty: Difficulty | 'mixed';
  /** Categories to include */
  categories: Category[];
  /** Number of questions */
  questionCount: number;
  /** Time limit in seconds (optional) */
  timeLimit?: number;
  /** Whether to shuffle questions */
  shuffleQuestions: boolean;
  /** Whether to shuffle answer options */
  shuffleOptions: boolean;
  /** Minimum score to pass (percentage) */
  passingScore?: number;
  /** Whether to show explanations after each question */
  showExplanations: boolean;
  /** Whether to allow reviewing answers */
  allowReview: boolean;
}

// Active quiz session state
export interface QuizSession {
  /** Unique session ID */
  id: string;
  /** Quiz configuration */
  config: QuizConfig;
  /** All questions in this quiz */
  questions: QuizQuestion[];
  /** Current question index */
  currentQuestionIndex: number;
  /** User's answers so far */
  answers: QuizAnswer[];
  /** Session start time */
  startTime: Date;
  /** Current session state */
  state: 'not-started' | 'in-progress' | 'paused' | 'completed' | 'abandoned';
  /** Total time spent (seconds) */
  totalTimeSpent: number;
  /** Whether session is timed */
  isTimed: boolean;
  /** Remaining time (seconds) if timed */
  remainingTime?: number;
}

// Quiz results and scoring
export interface QuizScore {
  /** Raw score (correct answers) */
  correctAnswers: number;
  /** Total questions */
  totalQuestions: number;
  /** Percentage score */
  percentage: number;
  /** Total points earned */
  points: number;
  /** Maximum possible points */
  maxPoints: number;
  /** Whether quiz was passed */
  passed: boolean;
  /** Letter grade */
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D' | 'F';
}

// Detailed quiz results
export interface QuizResults {
  /** Session information */
  session: QuizSession;
  /** Final score */
  score: QuizScore;
  /** Time statistics */
  timeStats: {
    totalTime: number;
    averageTimePerQuestion: number;
    fastestQuestion: number;
    slowestQuestion: number;
  };
  /** Performance by category */
  categoryPerformance: {
    category: Category;
    correct: number;
    total: number;
    percentage: number;
  }[];
  /** Performance by difficulty */
  difficultyPerformance: {
    difficulty: Difficulty;
    correct: number;
    total: number;
    percentage: number;
  }[];
  /** XP earned */
  xpEarned: number;
  /** Achievements unlocked during this quiz */
  achievementsUnlocked: string[];
  /** Whether user leveled up */
  leveledUp: boolean;
  /** New level if leveled up */
  newLevel?: number;
  /** Streak information */
  streakInfo: {
    maintained: boolean;
    currentStreak: number;
    streakBroken: boolean;
  };
  /** Recommendations for improvement */
  recommendations: {
    type: 'practice-category' | 'review-idiom' | 'try-difficulty';
    message: string;
    actionData?: any;
  }[];
}

// Quiz statistics for analytics
export interface QuizStatistics {
  /** Total quizzes taken */
  totalQuizzes: number;
  /** Average score */
  averageScore: number;
  /** Best score */
  bestScore: number;
  /** Total time spent in quizzes (minutes) */
  totalTimeSpent: number;
  /** Performance by quiz type */
  performanceByType: Record<QuizType, {
    taken: number;
    averageScore: number;
    bestScore: number;
  }>;
  /** Performance by difficulty */
  performanceByDifficulty: Record<Difficulty, {
    taken: number;
    averageScore: number;
    bestScore: number;
  }>;
  /** Most challenging categories */
  challengingCategories: {
    category: Category;
    averageScore: number;
    timesAttempted: number;
  }[];
  /** Improvement trends */
  improvementTrend: {
    period: string; // 'week' | 'month'
    scoreImprovement: number;
    accuracyImprovement: number;
  };
}

// Quiz leaderboard entry
export interface LeaderboardEntry {
  /** User ID */
  userId: string;
  /** Display name */
  displayName: string;
  /** User avatar */
  avatar?: string;
  /** Score for this leaderboard */
  score: number;
  /** Rank position */
  rank: number;
  /** Additional context (quiz type, difficulty, etc.) */
  context?: string;
  /** When this score was achieved */
  achievedAt: Date;
}

// Quiz challenge system
export interface QuizChallenge {
  /** Challenge ID */
  id: string;
  /** Challenge title */
  title: string;
  /** Challenge description */
  description: string;
  /** Challenge type */
  type: 'daily' | 'weekly' | 'special';
  /** Quiz configuration for this challenge */
  quizConfig: QuizConfig;
  /** Requirements to complete */
  requirements: {
    minScore?: number;
    timeLimit?: number;
    perfectScore?: boolean;
    attempts?: number;
  };
  /** Rewards for completion */
  rewards: {
    xp: number;
    achievements?: string[];
    badges?: string[];
  };
  /** When challenge starts */
  startDate: Date;
  /** When challenge ends */
  endDate: Date;
  /** Whether challenge is active */
  isActive: boolean;
  /** Number of participants */
  participantCount: number;
}

// All types are already exported above via direct export declarations