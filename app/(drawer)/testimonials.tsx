import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function ContactAVC() {
  return (
    <>
      <Stack.Screen options={{ title: 'Testimonials' }} />
      <Container>
        <ScreenContent path="app/(drawer)/testimonials.tsx" title="Testimonials" />
      </Container>
    </>
  );
}
