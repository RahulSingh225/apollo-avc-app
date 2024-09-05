import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function ContactAVC() {
  return (
    <>
      <Stack.Screen options={{ title: 'Terms and Conditions' }} />
      <Container>
        <ScreenContent path="app/(drawer)/terms-and-conditions.tsx" title="Terms and Conditions" />
      </Container>
    </>
  );
}
