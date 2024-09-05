import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function TierSlabBenefits() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tier Slab Benefits' }} />
      <Container>
        <ScreenContent path="app/(drawer)/tier-slab-benefits.tsx" title="Tier Slab Benefits" />
      </Container>
    </>
  );
}
