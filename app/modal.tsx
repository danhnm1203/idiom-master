import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText, ThemedView } from '@/components';

export default function DailyChallengeModal() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Daily Challenge</ThemedText>
      <ThemedText style={{ textAlign: 'center', marginVertical: 20 }}>
        Complete today's idiom challenge to earn bonus points and maintain your learning streak!
      </ThemedText>
      <ThemedText type="subtitle" style={{ textAlign: 'center', marginBottom: 10 }}>
        "Break the ice"
      </ThemedText>
      <ThemedText style={{ textAlign: 'center', marginBottom: 20 }}>
        What does this idiom mean?
      </ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Start Challenge</ThemedText>
      </Link>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Maybe later</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
