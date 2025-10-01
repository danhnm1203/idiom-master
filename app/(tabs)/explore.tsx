import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { ExternalLink, ParallaxScrollView, ThemedText, ThemedView, Collapsible, IconSymbol } from '@/components';
import { Fonts } from '@/constants';

export default function PracticeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F0F8FF', dark: '#2C3E50' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#4A90E2"
          name="gamecontroller.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Practice Idioms
        </ThemedText>
      </ThemedView>
      <ThemedText>Choose your practice mode and start mastering idioms!</ThemedText>
      <Collapsible title="Quiz Mode">
        <ThemedText>
          Test your knowledge with multiple-choice questions. Select the correct meaning for each idiom and improve your understanding.
        </ThemedText>
        <ThemedText>
          Perfect for quick learning sessions and knowledge assessment.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Flashcard Mode">
        <ThemedText>
          Review idioms with interactive flashcards. Swipe through cards to see meanings, examples, and usage contexts.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Listening Practice">
        <ThemedText>
          Improve your pronunciation and listening skills with audio examples of idioms used in context.
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
      </Collapsible>
      <Collapsible title="Daily Challenges">
        <ThemedText>
          Complete daily challenges to earn points and unlock new achievement badges. Track your learning streak!
        </ThemedText>
      </Collapsible>
      <Collapsible title="Progress Analytics">
        <ThemedText>
          View detailed analytics about your learning progress, including mastered idioms, accuracy rates, and improvement areas.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
