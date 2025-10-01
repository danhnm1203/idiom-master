/**
 * Idiom Types - Core type definitions for English idioms and related data
 * Used throughout the Idiom Master learning app
 */

// Category type for idiom classification
export type Category =
  | 'animals'
  | 'body'
  | 'colors'
  | 'weather'
  | 'business'
  | 'emotions'
  | 'food'
  | 'time'
  | 'money'
  | 'relationships';

// Difficulty levels for progressive learning
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

// Frequency of idiom usage in English
export type Frequency = 'common' | 'moderate' | 'rare';

// Example interface for idiom usage examples
export interface Example {
  /** The example sentence using the idiom */
  sentence: string;
  /** Context where this example would be used */
  context: string;
  /** Optional translation or explanation */
  explanation?: string;
}

// Core Idiom interface - represents a single English idiom
export interface Idiom {
  /** Unique identifier for the idiom */
  id: string;

  /** The actual idiom text (e.g., "break the ice") */
  idiom: string;

  /** The meaning/definition of the idiom */
  meaning: string;

  /** What the idiom would mean if taken literally */
  literalMeaning: string;

  /** Categories this idiom belongs to */
  category: Category[];

  /** Learning difficulty level */
  difficulty: Difficulty;

  /** Example sentences showing usage */
  examples: Example[];

  /** Path or URL to audio file for pronunciation */
  audioFile: string;

  /** How commonly this idiom is used */
  frequency: Frequency;

  /** IDs of related or similar idioms */
  relatedIdioms: string[];

  /** Optional etymology or origin story */
  origin?: string;

  /** Tags for additional categorization */
  tags?: string[];

  /** When this idiom was added to the app */
  createdAt?: Date;

  /** Last time this idiom data was updated */
  updatedAt?: Date;
}

// Simplified idiom interface for lists and previews
export interface IdiomSummary {
  id: string;
  idiom: string;
  meaning: string;
  difficulty: Difficulty;
  category: Category[];
  audioFile: string;
}

// Interface for idiom search and filtering
export interface IdiomFilter {
  categories?: Category[];
  difficulty?: Difficulty[];
  frequency?: Frequency[];
  searchQuery?: string;
  tags?: string[];
}

// Interface for idiom learning progress
export interface IdiomProgress {
  idiomId: string;
  /** Whether user has seen this idiom */
  seen: boolean;
  /** Whether user marked as learned */
  learned: boolean;
  /** Whether user bookmarked this idiom */
  bookmarked: boolean;
  /** Number of times user has practiced this idiom */
  practiceCount: number;
  /** Last time user interacted with this idiom */
  lastPracticed?: Date;
  /** User's confidence level (1-5) */
  confidenceLevel?: number;
}

// All types are already exported above via direct export declarations