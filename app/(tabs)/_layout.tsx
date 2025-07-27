import React, { PropsWithChildren } from 'react';
import { Tabs } from 'expo-router';
import { Text } from '@gluestack-ui/themed';
import { ThemeProvider } from '@react-navigation/native';
import {
  styles,
  TAB_CONFIG,
  navigationTheme,
  SCREEN_OPTIONS,
} from '@/src/styles/TabsLayout.styles';

type TabName = keyof typeof TAB_CONFIG;

const createTabOptions = (tabName: TabName) => ({
  title: TAB_CONFIG[tabName].label,
  tabBarIcon: () => (
    <Text style={styles.tabIcon}>{TAB_CONFIG[tabName].icon}</Text>
  ),
  tabBarLabel: ({ children }: PropsWithChildren) => (
    <Text style={styles.tabLabel}>{children}</Text>
  ),
});

const TabLayout: React.FC = () => {
  return (
    <ThemeProvider value={navigationTheme}>
      <Tabs screenOptions={SCREEN_OPTIONS}>
        <Tabs.Screen name="search" options={createTabOptions('search')} />
        <Tabs.Screen name="bag" options={createTabOptions('bag')} />
      </Tabs>
    </ThemeProvider>
  );
};

export default TabLayout;
