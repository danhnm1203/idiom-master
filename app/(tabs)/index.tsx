import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave, ParallaxScrollView, ThemedText, ThemedView } from '@/components';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Idiom Master</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Learn English Idioms</ThemedText>
        <ThemedText>
          Master the art of English idioms with interactive lessons and engaging practice sessions.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <ThemedText type="subtitle">Daily Challenge</ThemedText>
        </Link>
        <ThemedText>
          Take on today's idiom challenge and test your knowledge!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Progress Tracking</ThemedText>
        <ThemedText>
          Track your learning progress and unlock new achievement badges as you master more idioms.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
