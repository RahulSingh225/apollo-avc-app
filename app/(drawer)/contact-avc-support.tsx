import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function ContactAVC() {
  return (
    <>
      <Stack.Screen options={{ title: 'Contact AVC Support' }} />
      <Container>
        <ScreenContent path="app/(drawer)/contact-avc-support.tsx" title="Contact AVC Support" />
      </Container>
    </>
  );
}
