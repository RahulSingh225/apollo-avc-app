import { useFonts } from 'expo-font';
import { SplashScreen, Slot } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import { TRPCReactProvider } from '~/trpc/react';
import { SessionProvider } from '~/context/AuthContext';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(drawer)',
};

export default function RootLayout() {

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TRPCReactProvider>
      <TamaguiProvider config={config}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SessionProvider>
            <Slot />
          </SessionProvider>
        </GestureHandlerRootView>
      </TamaguiProvider>
    </TRPCReactProvider>
  );
}
