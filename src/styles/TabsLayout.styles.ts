import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    paddingBottom: 12,
    paddingTop: 12,
    height: 65,
    position: 'absolute',
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 25,
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    backdropFilter: 'blur(10px)',
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
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  activeTab: {
    color: '#FFFFFF',
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
