import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function ContactABU() {
  return (
    <>
      <Stack.Screen options={{ title: 'Contact your ABU' }} />
      <Container>
        <ScreenContent path="app/(drawer)/contact-abu.tsx" title="Contact your ABU" />
      </Container>
    </>
  );
}
