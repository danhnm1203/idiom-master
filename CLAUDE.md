# IdiomMaster - English Idiom Learning App (Expo)

> **Document Status:** Living Document - Updated as features are completed  
> **Framework:** Expo (React Native)  
> **Current Phase:** Development  
> **Last Updated:** 2025-10-01  
> **Version:** 1.0.0-alpha

---

## 📋 Project Status Dashboard

### Overall Progress: 5% Complete

```
Phase 1: Project Setup          [████      ] 2/5 tasks (Expo Init ✅, Dependencies ✅)
Phase 2: Data Layer             [          ] 0/4 tasks
Phase 3: Navigation             [          ] 0/3 tasks
Phase 4: Core Screens           [          ] 0/7 tasks
Phase 5: Shared Components      [          ] 0/8 tasks
Phase 6: Features               [          ] 0/6 tasks
Phase 7: Testing & Polish       [          ] 0/4 tasks
Phase 8: Final Steps            [          ] 0/4 tasks
```

**Quick Stats:**
- ✅ Completed: 2 tasks (Expo initialized, Dependencies installed)
- 🚧 In Progress: 0 tasks
- 📋 Planned: 39 tasks
- 🐛 Known Issues: 0

---

## 📖 Project Overview

A React Native mobile application built with **Expo** to help users learn English idioms through interactive flashcards, quizzes, daily practice, and gamification.

**Key Features:**
- 500+ English idioms with audio pronunciation
- Interactive flashcard learning mode
- Multiple quiz types
- Daily idiom notifications
- Progress tracking with XP, levels, achievements
- Streak system
- Offline mode support
- Dark mode support

---

## 🛠️ Tech Stack (Expo)

### Frontend
- **Framework:** Expo SDK 49+ with TypeScript
- **Navigation:** Expo Router or React Navigation 6.x
- **State Management:** Redux Toolkit with Redux Persist
- **UI Library:** React Native Paper (Material Design)
- **Animations:** React Native Reanimated 3
- **Audio:** Expo AV
- **Storage:** Expo SecureStore / AsyncStorage
- **Icons:** @expo/vector-icons
- **Notifications:** Expo Notifications

### Expo Managed Services
- **Updates:** Expo Updates (OTA)
- **Build:** EAS Build
- **Submit:** EAS Submit
- **Auth:** Expo Auth Session (future)

### Additional Services
- **Analytics:** Expo Analytics or Firebase
- **Crash Reporting:** Sentry (optional)

---

## 📁 Project Structure (Expo)

```
IdiomMaster/
├── app.json                 # Expo configuration
├── eas.json                 # EAS Build configuration
├── claude.md                # This file
├── App.tsx                  # Entry point
├── app/                     # Expo Router (if using)
│   ├── (tabs)/
│   ├── _layout.tsx
│   └── index.tsx
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── idiom/
│   │   └── quiz/
│   ├── screens/
│   │   ├── auth/
│   │   ├── home/
│   │   ├── browse/
│   │   ├── learn/
│   │   ├── quiz/
│   │   └── profile/
│   ├── navigation/
│   │   ├── AuthNavigator.tsx
│   │   ├── MainTabNavigator.tsx
│   │   └── RootNavigator.tsx
│   ├── store/
│   │   ├── slices/
│   │   └── index.ts
│   ├── services/
│   │   ├── audioService.ts
│   │   ├── storageService.ts
│   │   ├── notificationService.ts
│   │   └── gamificationService.ts
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   ├── constants/
│   │   ├── theme.ts
│   │   └── colors.ts
│   ├── assets/
│   │   ├── images/
│   │   └── audio/
│   └── data/
│       └── mockIdioms.ts
└── package.json
```

---

## 🎯 Development Roadmap

### PHASE 1: Project Setup & Foundation

#### ✅ Task 1.1: Initialize Expo Project
**Status:** ✅ COMPLETED  
**Completed:** 2025-10-01  
**Notes:** Project already initialized by user

---

#### ✅ Task 1.2: Install Core Dependencies
**Status:** ✅ COMPLETED
**Completed:** 2025-10-01
**Notes:** Successfully installed all core dependencies with software-architect guidance. Includes Zustand for state management, React Native Elements for UI, Expo AV for audio, Expo Notifications, SQLite for offline storage, and additional utilities.  

**Requirements:**
```bash
# Navigation
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

# State Management
npm install @reduxjs/toolkit react-redux redux-persist
npx expo install @react-native-async-storage/async-storage

# UI Components
npm install react-native-paper
npx expo install react-native-vector-icons

# Audio
npx expo install expo-av

# Notifications
npx expo install expo-notifications

# Other
npm install axios date-fns
```

**Acceptance Criteria:**
- [ ] All packages installed without errors
- [ ] App builds and runs with `expo start`
- [ ] No peer dependency warnings

---

#### 📋 Task 1.3: Setup Project Structure
**Status:** 📋 PLANNED  

**Requirements:**
- [ ] Create all folders in src/ as per structure above
- [ ] Create barrel exports (index.ts) for each folder
- [ ] Setup TypeScript path aliases in tsconfig.json
- [ ] Create .env and .env.example files

**Path Aliases to Add:**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/screens/*": ["src/screens/*"],
      "@/store/*": ["src/store/*"],
      "@/services/*": ["src/services/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/utils/*": ["src/utils/*"],
      "@/types/*": ["src/types/*"],
      "@/constants/*": ["src/constants/*"],
      "@/assets/*": ["src/assets/*"]
    }
  }
}
```

**Acceptance Criteria:**
- [ ] All folders created
- [ ] Can import using @ aliases
- [ ] TypeScript recognizes paths

---

#### 📋 Task 1.4: Configure Theme & Constants
**Status:** 📋 PLANNED  

**Files to Create:**
- `src/constants/theme.ts` - Complete theme definition
- `src/constants/colors.ts` - Color palette
- `src/constants/spacing.ts` - Spacing scale
- `src/constants/typography.ts` - Font sizes and weights
- `src/constants/index.ts` - App constants

**Theme Structure:**
```typescript
export const lightTheme = {
  colors: {
    primary: '#6200EE',
    secondary: '#03DAC6',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    error: '#B00020',
    text: '#000000',
    textSecondary: '#757575',
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
  typography: {
    h1: { fontSize: 32, fontWeight: 'bold' },
    h2: { fontSize: 24, fontWeight: '600' },
    body: { fontSize: 16, fontWeight: 'normal' },
  },
};

export const darkTheme = { ... };
```

**Acceptance Criteria:**
- [ ] Theme files created and exported
- [ ] Both light and dark themes defined
- [ ] Can import and use theme in components

---

#### 📋 Task 1.5: Setup TypeScript Types
**Status:** 📋 PLANNED  

**Files to Create:**
- `src/types/idiom.types.ts`
- `src/types/user.types.ts`
- `src/types/navigation.types.ts`
- `src/types/quiz.types.ts`
- `src/types/index.ts`

**Core Types:**
```typescript
// idiom.types.ts
export interface Idiom {
  id: string;
  idiom: string;
  meaning: string;
  literalMeaning: string;
  category: Category[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  examples: Example[];
  audioFile: string;
  frequency: 'common' | 'moderate' | 'rare';
  relatedIdioms: string[];
}

export type Category = 'animals' | 'body' | 'colors' | 'weather' | 
                       'business' | 'emotions' | 'food';

// user.types.ts
export interface UserProgress {
  userId: string;
  level: number;
  xp: number;
  streak: number;
  learnedIdioms: string[];
  bookmarkedIdioms: string[];
  achievements: Achievement[];
  lastActive: Date;
}
```

**Acceptance Criteria:**
- [ ] All type files created
- [ ] Types properly exported
- [ ] No TypeScript errors

---

### PHASE 2: Data Layer & State Management

#### 📋 Task 2.1: Setup Redux Store
**Status:** 📋 PLANNED  

**Files to Create:**
- `src/store/index.ts`
- `src/store/slices/authSlice.ts`
- `src/store/slices/idiomSlice.ts`
- `src/store/slices/progressSlice.ts`
- `src/store/slices/settingsSlice.ts`

**Store Configuration:**
```typescript
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slices/authSlice';
import idiomReducer from './slices/idiomSlice';
import progressReducer from './slices/progressSlice';
import settingsReducer from './slices/settingsSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'progress', 'settings', 'idiom'],
};

// ... configure store
```

**Acceptance Criteria:**
- [ ] Store configured with all slices
- [ ] Redux Persist working
- [ ] Typed hooks exported (useAppDispatch, useAppSelector)
- [ ] Can dispatch actions and read state

---

#### 📋 Task 2.2: Create Mock Idiom Data
**Status:** 📋 PLANNED  

**Requirements:**
- [ ] Create `src/data/mockIdioms.ts`
- [ ] Add 50+ idioms across all categories
- [ ] Include complete data for each idiom
- [ ] Add realistic example sentences

**Categories (min 5 each):**
- Animals: "raining cats and dogs", "let the cat out of the bag"
- Body: "cost an arm and a leg", "break a leg"
- Colors: "green with envy", "once in a blue moon"
- Weather: "under the weather", "steal someone's thunder"
- Business: "think outside the box", "cut corners"
- Emotions: "over the moon", "down in the dumps"
- Food: "piece of cake", "egg on your face"

**Acceptance Criteria:**
- [ ] 50+ idioms defined
- [ ] All categories represented
- [ ] Each idiom has examples, meaning, literal meaning
- [ ] Properly typed with Idiom interface

---

#### 📋 Task 2.3: Create Service Layer
**Status:** 📋 PLANNED  

**Files to Create:**
- `src/services/storageService.ts` - AsyncStorage wrapper
- `src/services/audioService.ts` - Audio playback with Expo AV
- `src/services/notificationService.ts` - Expo Notifications
- `src/services/gamificationService.ts` - XP, levels, achievements

**Example Service:**
```typescript
// audioService.ts
import { Audio } from 'expo-av';

class AudioService {
  private sound: Audio.Sound | null = null;

  async playIdiom(audioFile: string) {
    try {
      if (this.sound) await this.sound.unloadAsync();
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioFile }
      );
      this.sound = sound;
      await sound.playAsync();
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  }
  
  async stopIdiom() {
    if (this.sound) {
      await this.sound.stopAsync();
      await this.sound.unloadAsync();
    }
  }
}

export default new AudioService();
```

**Acceptance Criteria:**
- [ ] All services created
- [ ] Error handling implemented
- [ ] Services properly typed
- [ ] Can be imported and used

---

#### 📋 Task 2.4: Load Initial Data
**Status:** 📋 PLANNED  

**Requirements:**
- [ ] Load mock idioms into Redux on app start
- [ ] Initialize user progress
- [ ] Set default settings
- [ ] Show loading screen during init

**Acceptance Criteria:**
- [ ] Idioms available in store after load
- [ ] User created with defaults (level 1, 0 XP)
- [ ] App shows splash/loading screen
- [ ] Data persists after app restart

---

### PHASE 3: Navigation Structure

#### 📋 Task 3.1: Setup React Navigation
**Status:** 📋 PLANNED  

**Files to Create:**
- `src/navigation/RootNavigator.tsx`
- `src/navigation/AuthNavigator.tsx`
- `src/navigation/MainTabNavigator.tsx`
- `src/types/navigation.types.ts`

**Navigation Structure:**
```typescript
// RootNavigator.tsx
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

// AuthNavigator.tsx
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Onboarding: undefined;
};

// MainTabNavigator.tsx
export type MainTabParamList = {
  Home: undefined;
  Browse: undefined;
  Learn: undefined;
  Quiz: undefined;
  Profile: undefined;
};
```

**Acceptance Criteria:**
- [ ] Navigation setup complete
- [ ] Can navigate between screens
- [ ] TypeScript types working
- [ ] Shows auth stack if not logged in

---

#### 📋 Task 3.2: Create Placeholder Screens
**Status:** 📋 PLANNED  

**Screens to Create:**
- Auth: LoginScreen, RegisterScreen, OnboardingScreen
- Main: HomeScreen, BrowseScreen, LearnScreen, QuizScreen, ProfileScreen

**Each screen initially:**
```typescript
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}
```

**Acceptance Criteria:**
- [ ] All 8 screens created
- [ ] Basic layout with Text component
- [ ] Can navigate to each screen
- [ ] No errors

---

#### 📋 Task 3.3: Configure Tab Bar
**Status:** 📋 PLANNED  

**Requirements:**
- [ ] Add icons from @expo/vector-icons
- [ ] Style tab bar with theme colors
- [ ] Add labels
- [ ] Configure active/inactive states

**Tab Configuration:**
```typescript
<Tab.Screen 
  name="Home" 
  component={HomeScreen}
  options={{
    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
    tabBarLabel: 'Home'
  }}
/>
```

**Acceptance Criteria:**
- [ ] All tabs have icons and labels
- [ ] Tab bar styled correctly
- [ ] Active state shows different color

---

### PHASE 4: Core Screens Implementation

#### 📋 Task 4.1: Build Home Screen
**Status:** 📋 PLANNED  

**Components to Build:**
- DailyIdiomCard - Shows today's idiom
- StreakCounter - Fire icon with number
- QuickActionButtons - Navigate to learn/quiz
- ProgressWidget - XP bar and level

**Screen Layout:**
```
┌──────────────────────────┐
│   Daily Idiom Card       │
│   "Break the ice"        │
│   [Definition...]        │
└──────────────────────────┘
    🔥 7 Day Streak

[Practice] [Take Quiz]

┌──────────────────────────┐
│  Progress                │
│  Level 5 [======>   ]    │
│  250/500 XP              │
└──────────────────────────┘
```

**Acceptance Criteria:**
- [ ] Shows daily idiom from store
- [ ] Streak displays correct count
- [ ] Buttons navigate correctly
- [ ] Progress shows real data

---

#### 📋 Task 4.2: Build Browse Screen
**Status:** 📋 PLANNED  

**Features:**
- SearchBar with TextInput
- Category filter chips
- FlatList of idioms
- Tap to view detail

**Search & Filter:**
```typescript
const filteredIdioms = idioms.filter(idiom => {
  const matchesSearch = idiom.idiom.toLowerCase()
    .includes(searchQuery.toLowerCase());
  const matchesCategory = selectedCategory 
    ? idiom.category.includes(selectedCategory) 
    : true;
  return matchesSearch && matchesCategory;
});
```

**Acceptance Criteria:**
- [ ] Search works in real-time
- [ ] Can filter by category
- [ ] List performs well (50+ items)
- [ ] Tapping opens detail screen

---

#### 📋 Task 4.3: Build Idiom Detail Screen
**Status:** 📋 PLANNED  

**Content to Display:**
- Idiom text (large, bold)
- Audio play button
- Meaning section
- Literal meaning section
- Example sentences (cards)
- Related idioms list
- Bookmark button

**Layout:**
```
┌──────────────────────────┐
│  Break the ice    [🔊]   │
│  ───────────────         │
│  Meaning: To make...     │
│                          │
│  Literal: Breaking...    │
│                          │
│  Examples:               │
│  • "Let me break..."     │
│  • "She broke the..."    │
│                          │
│  Related: "Warm up to"   │
└──────────────────────────┘
    [⭐ Bookmark]
```

**Acceptance Criteria:**
- [ ] All idiom data displays
- [ ] Audio button works (plays sound)
- [ ] Can bookmark idiom
- [ ] Can mark as learned

---

#### 📋 Task 4.4: Build Flashcard Screen
**Status:** 📋 PLANNED  

**Features:**
- Card flip animation (tap to flip)
- Swipe gestures (know it / need practice)
- Progress counter
- Deck selection

**Card States:**
- Front: Idiom only
- Back: Meaning + example + audio

**Gestures:**
- Swipe right: Know it (green feedback)
- Swipe left: Need practice (yellow feedback)
- Tap: Flip card

**Acceptance Criteria:**
- [ ] Card flips smoothly
- [ ] Swipe gestures work
- [ ] Progress updates
- [ ] Shows summary after deck complete

---

#### 📋 Task 4.5: Build Quiz Screen
**Status:** 📋 PLANNED  

**Quiz Types:**
1. **Multiple Choice:** Choose correct meaning
2. **Fill in Blank:** Complete the sentence
3. **Match Situation:** Choose appropriate idiom

**Quiz Flow:**
1. Question screen (1 of 10)
2. Answer options
3. Immediate feedback (correct/wrong)
4. Next button
5. Results screen at end

**Results Screen:**
- Score (8/10)
- XP earned (+50 XP)
- Review wrong answers

**Acceptance Criteria:**
- [ ] Questions display correctly
- [ ] Can select answers
- [ ] Feedback shows immediately
- [ ] Score calculates correctly
- [ ] XP added to progress

---

#### 📋 Task 4.6: Build Profile Screen
**Status:** 📋 PLANNED  

**Sections:**
1. Profile Header (avatar, name, level)
2. Stats Cards (idioms learned, streak, quizzes)
3. Achievement Grid
4. Progress Chart
5. Settings Button

**Stats to Show:**
- Total idioms learned: 45/500
- Current streak: 🔥 7 days
- Quizzes completed: 12
- Accuracy: 85%
- Total XP: 1,250

**Achievements:**
```
[✓] First Steps    [✓] Week Warrior
[ ] Month Master   [✓] Quiz Master
```

**Acceptance Criteria:**
- [ ] All stats show real data
- [ ] Achievements display correctly
- [ ] Can open settings
- [ ] Chart renders properly

---

#### 📋 Task 4.7: Build Auth Screens
**Status:** 📋 PLANNED  

**Login Screen:**
- Email input
- Password input
- Login button
- "Don't have account?" → Register
- (Mock auth for now)

**Register Screen:**
- Email, password, confirm password
- Username
- Register button

**Onboarding:**
- 3 slides explaining app
- "Get Started" button
- Skip button

**Acceptance Criteria:**
- [ ] Forms validate input
- [ ] Can "login" (set isAuthenticated: true)
- [ ] Onboarding shows on first launch
- [ ] Can skip to main app

---

### PHASE 5: Shared Components

#### 📋 Task 5.1: Build Common UI Components
**Status:** 📋 PLANNED  

**Components to Create:**

1. **Button.tsx**
```typescript
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
}
```

2. **Card.tsx** - Elevated card with shadow
3. **ProgressBar.tsx** - Animated progress
4. **Badge.tsx** - Category/level badges
5. **EmptyState.tsx** - For empty lists
6. **LoadingSpinner.tsx** - Activity indicator
7. **ErrorMessage.tsx** - Error display
8. **Header.tsx** - Custom header

**Acceptance Criteria:**
- [ ] All 8 components created
- [ ] Properly typed with TypeScript
- [ ] Reusable across screens
- [ ] Follow theme design system

---

### PHASE 6: Features & Functionality

#### 📋 Task 6.1: Implement Audio Playback
**Status:** 📋 PLANNED  

**Using Expo AV:**
```typescript
import { Audio } from 'expo-av';

const playAudio = async (audioFile: string) => {
  const { sound } = await Audio.Sound.createAsync(
    require('../assets/audio/idiom1.mp3')
  );
  await sound.playAsync();
};
```

**Requirements:**
- [ ] Audio service with play/pause/stop
- [ ] Loading state while audio loads
- [ ] Error handling
- [ ] Works on iOS and Android

**Acceptance Criteria:**
- [ ] Audio plays on button press
- [ ] Can pause/stop audio
- [ ] Handles missing files gracefully
- [ ] No memory leaks

---

#### 📋 Task 6.2: Implement Gamification
**Status:** 📋 PLANNED  

**XP System:**
- Learn new idiom: +10 XP
- Complete quiz: +50 XP
- Perfect quiz: +25 bonus
- Daily streak: +25 XP

**Level Progression:**
- Level 1: 0 XP
- Level 2: 100 XP
- Level 3: 200 XP
- Level N: N * 100 XP

**Achievements:**
- "First Steps" - Learn 1 idiom
- "Week Warrior" - 7 day streak
- "Month Master" - 30 day streak
- "Century Club" - 100 idioms

**Acceptance Criteria:**
- [ ] XP awarded correctly
- [ ] Level increases at thresholds
- [ ] Achievements unlock
- [ ] Level-up animation

---

#### 📋 Task 6.3: Implement Notifications
**Status:** 📋 PLANNED  

**Using Expo Notifications:**
```typescript
import * as Notifications from 'expo-notifications';

// Schedule daily notification
await Notifications.scheduleNotificationAsync({
  content: {
    title: "Time to learn! 📚",
    body: "Today's idiom: Break the ice",
  },
  trigger: {
    hour: 9,
    minute: 0,
    repeats: true,
  },
});
```

**Requirements:**
- [ ] Request notification permissions
- [ ] Schedule daily notification
- [ ] Configure time in settings
- [ ] Deep link to daily idiom

**Acceptance Criteria:**
- [ ] Notification sent daily
- [ ] Tapping opens app
- [ ] Can enable/disable in settings
- [ ] Works on both platforms

---

#### 📋 Task 6.4: Implement Search & Filter
**Status:** 📋 PLANNED  

**Search Features:**
- Full-text search by idiom name
- Search by meaning
- Search by category
- Debounced input (300ms)

**Filter Features:**
- Multiple category selection
- Difficulty filter
- Learned/unlearned filter
- Sort options

**Acceptance Criteria:**
- [ ] Search returns relevant results
- [ ] Multiple filters work together
- [ ] Performance good with 500+ idioms
- [ ] Results update smoothly

---

#### 📋 Task 6.5: Implement Offline Mode
**Status:** 📋 PLANNED  

**Features:**
- Cache all idiom data
- Store in AsyncStorage
- Queue offline actions
- Sync when online

**Requirements:**
- [ ] All idioms cached locally
- [ ] App works fully offline
- [ ] Offline indicator in UI
- [ ] Sync on reconnection

**Acceptance Criteria:**
- [ ] Can browse idioms offline
- [ ] Can practice offline
- [ ] Progress saved offline
- [ ] Syncs automatically

---

#### 📋 Task 6.6: Implement Settings
**Status:** 📋 PLANNED  

**Settings Options:**
- Theme toggle (light/dark)
- Notification time picker
- Notification enable/disable
- Sound effects on/off
- Language preference
- About section

**Acceptance Criteria:**
- [ ] All settings persist
- [ ] Theme changes immediately
- [ ] Settings accessible from profile

---

### PHASE 7: Testing & Polish

#### 📋 Task 7.1: Add Error Handling
**Status:** 📋 PLANNED  

**Error Types:**
- Network errors
- Audio playback errors
- Storage errors
- Invalid data errors

**Requirements:**
- [ ] Try-catch blocks everywhere
- [ ] User-friendly error messages
- [ ] Retry mechanisms
- [ ] Error logging

---

#### 📋 Task 7.2: Add Loading States
**Status:** 📋 PLANNED  

**Where to Add:**
- Initial app load
- Screen transitions
- Data fetching
- Audio loading
- Quiz submission

**Use:**
- ActivityIndicator
- Skeleton screens
- Progress indicators

---

#### 📋 Task 7.3: Add Animations
**Status:** 📋 PLANNED  

**Using React Native Reanimated:**
- Card flip (flashcards)
- Swipe gestures
- Level-up celebration
- Button press feedback
- Screen transitions
- Achievement unlock

---

#### 📋 Task 7.4: Performance Optimization
**Status:** 📋 PLANNED  

**Optimizations:**
- React.memo for components
- useMemo for calculations
- useCallback for functions
- FlatList optimization
- Image caching
- Bundle size reduction

---

### PHASE 8: Final Steps

#### 📋 Task 8.1: Complete Dark Mode
**Status:** 📋 PLANNED  

**Requirements:**
- [ ] All screens support dark mode
- [ ] Proper contrast ratios
- [ ] Theme toggle works
- [ ] Preference persists

---

#### 📋 Task 8.2: Accessibility
**Status:** 📋 PLANNED  

**Features:**
- Accessibility labels
- Screen reader support
- Font scaling
- Color contrast (WCAG AA)

---

#### 📋 Task 8.3: Documentation
**Status:** 📋 PLANNED  

**Documents:**
- README.md
- Setup instructions
- Build guide
- Changelog

---

#### 📋 Task 8.4: Build & Deploy Preparation
**Status:** 📋 PLANNED  

**Using EAS Build:**
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure
eas build:configure

# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

**Requirements:**
- [ ] Configure app.json
- [ ] Setup EAS
- [ ] Test build locally
- [ ] Prepare store assets

---

## 📊 Data Models

### Idiom Interface
```typescript
interface Idiom {
  id: string;
  idiom: string;
  meaning: string;
  literalMeaning: string;
  category: Category[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  examples: Example[];
  audioFile: string;
  frequency: 'common' | 'moderate' | 'rare';
  relatedIdioms: string[];
}

interface Example {
  sentence: string;
  context: string;
}

type Category = 'animals' | 'body' | 'colors' | 'weather' | 
                'business' | 'emotions' | 'food';
```

### User Progress Interface
```typescript
interface UserProgress {
  userId: string;
  level: number;
  xp: number;
  streak: number;
  learnedIdioms: string[];
  bookmarkedIdioms: string[];
  achievements: Achievement[];
  quizHistory: QuizResult[];
  lastActive: Date;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

interface QuizResult {
  id: string;
  date: Date;
  score: number;
  totalQuestions: number;
  xpEarned: number;
}
```

---

## 💻 Development Commands (Expo)

### Development
```bash
# Start development server
npx expo start

# Start on iOS
npx expo start --ios

# Start on Android
npx expo start --android

# Start with cache cleared
npx expo start -c

# Type check
npm run type-check
```

### Building
```bash
# Development build
eas build --profile development --platform ios
eas build --profile development --platform android

# Production build
eas build --profile production --platform all

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

---

## 🎨 Theme & Design

### Colors
```typescript
export const colors = {
  light: {
    primary: '#6200EE',
    secondary: '#03DAC6',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    error: '#B00020',
    text: '#000000',
    textSecondary: '#757575',
  },
  dark: {
    primary: '#BB86FC',
    secondary: '#03DAC6',
    background: '#121212',
    surface: '#1E1E1E',
    error: '#CF6679',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
  },
};
```

### Spacing
```typescript
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
```

### Typography
```typescript
export const typography = {
  h1: { fontSize: 32, fontWeight: 'bold' as const },
  h2: { fontSize: 24, fontWeight: '600' as const },
  h3: { fontSize: 20, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: 'normal' as const },
  caption: { fontSize: 14, fontWeight: 'normal' as const },
  label: { fontSize: 12, fontWeight: '500' as const },
};
```

---

## 💡 Notes for Claude Code

**Important Expo Considerations:**
1. Use `expo install` for Expo-compatible packages
2. Use Expo AV instead of react-native-sound
3. Use Expo Notifications instead of push-notification libraries
4. Use @expo/vector-icons instead of react-native-vector-icons
5. Test with Expo Go app during development
6. Use EAS Build for production builds

**Best Practices:**
- Always use TypeScript
- Keep components under 200 lines
- Extract logic to custom hooks
- Test on both iOS and Android
- Follow React Native performance best practices
- Use FlatList for long lists
- Implement proper error handling

**Current Phase:** Phase 1 - Setup  
**Next Task:** Task 1.2 - Install dependencies

---

Last Updated: 2025-10-01