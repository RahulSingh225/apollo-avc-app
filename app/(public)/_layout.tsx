import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#18252b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="generate-otp" options={{}} />
      <Stack.Screen name="validate-otp" options={{}} />
      <Stack.Screen name="registration" options={{}} />
    </Stack>
  );
}
