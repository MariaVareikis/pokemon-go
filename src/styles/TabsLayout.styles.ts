import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 0,
    paddingBottom: 12,
    paddingTop: 8,
    height: 70,
    position: 'absolute',
    borderRadius: 0,
    marginHorizontal: 20,
    marginBottom: 20,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },

  tabIcon: {
    textAlign: 'center',
    fontSize: 24,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 4,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  activeTab: {
    color: '#FFF',
  },
  inactiveTab: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export const TAB_CONFIG = {
  search: {
    icon: '🔍',
    label: 'חיפוש',
  },
  bag: {
    icon: '🎒',
    label: 'תיק',
  },
} as const;

export const navigationTheme = {
  dark: false,
  colors: {
    primary: '#ffffff',
    background: 'transparent',
    card: 'transparent',
    text: '#ffffff',
    border: 'rgba(255, 255, 255, 0.2)',
    notification: '#ffffff',
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: 'normal' as const,
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500' as const,
    },
    bold: {
      fontFamily: 'System',
      fontWeight: 'bold' as const,
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '800' as const,
    },
  },
};

export const SCREEN_OPTIONS = {
  headerShown: false,
  tabBarStyle: styles.tabBar,
  tabBarActiveTintColor: styles.activeTab.color,
  tabBarInactiveTintColor: styles.inactiveTab.color,
} as const;
