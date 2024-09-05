import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false
      }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="[id]" options={{}} />
    </Stack>
  );
}
