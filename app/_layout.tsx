import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; 
import ErrorBoundary from '@/src/components/ErrorBoundary/ErrorBoundary';
import LinearGradientBackground from '@/src/components/LinearGradientBackground/LinearGradientBackground';
import Header from '@/src/components/Header/Header';
import { navigationTheme } from '@/src/styles/TabsLayout.styles';
import { SCREEN_OPTIONS } from '@/src/constants/providers';
import { ROOT_SCREENS } from '@/src/constants/screens';

const RootLayout: React.FC = () => {
  return (
    <GluestackUIProvider config={config}>
      <ThemeProvider value={navigationTheme}>
        <ErrorBoundary>
          <LinearGradientBackground>
            <Header />
            <Stack screenOptions={SCREEN_OPTIONS}>
              <Stack.Screen name={ROOT_SCREENS.INDEX} />
            </Stack>
          </LinearGradientBackground>
        </ErrorBoundary>
      </ThemeProvider>
    </GluestackUIProvider>
  );
};

export default RootLayout;
