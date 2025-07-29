import CatchPopup from '@/src/components/CatchPopup/CatchPopup';
import ErrorBoundary from '@/src/components/ErrorBoundary/ErrorBoundary';
import Header from '@/src/components/Header/Header';
import LinearGradientBackground from '@/src/components/LinearGradientBackground/LinearGradientBackground';
import { SCREEN_OPTIONS } from '@/src/constants/providers';
import { ROOT_SCREENS } from '@/src/constants/screens';
import store, { persistor } from '@/src/store';
import { navigationTheme } from '@/src/styles/TabsLayout.styles';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const RootLayout: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GluestackUIProvider config={config}>
        <ThemeProvider value={navigationTheme}>
          <ErrorBoundary>
            <LinearGradientBackground>
              <Header />
              <Stack screenOptions={SCREEN_OPTIONS}>
                <Stack.Screen name={ROOT_SCREENS.INDEX} />
              </Stack>
              <CatchPopup />
            </LinearGradientBackground>
          </ErrorBoundary>
        </ThemeProvider>
      </GluestackUIProvider>
    </PersistGate>
  </Provider>
);
export default RootLayout;
