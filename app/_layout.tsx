import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nManager } from 'react-native';

import ErrorBoundary from '@/src/components/ErrorBoundary/ErrorBoundary';
import LinearGradientBackground from '@/src/components/LinearGradientBackground/LinearGradientBackground';
import Header from '@/src/components/Header/Header';
import { navigationTheme } from '@/src/styles/TabsLayout.styles';
import { SCREEN_OPTIONS } from '@/src/constants/providers';
import { ROOT_SCREENS } from '@/src/constants/screens';
import store, { persistor } from '@/src/store';
import CatchPopup from '@/src/components/CatchPopup/CatchPopup';

const RootLayout: React.FC = () => {
  useEffect(() => {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  }, []);

  return (
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
};

export default RootLayout;
