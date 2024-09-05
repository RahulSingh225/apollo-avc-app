import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Feedback() {
  return (
    <>
      <Stack.Screen options={{ title: 'Feedback & Review' }} />
      <Container>
        <ScreenContent path="app/(drawer)/feedback-review.tsx" title="Feedback & Review" />
      </Container>
    </>
  );
}
