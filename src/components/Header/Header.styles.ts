import { Platform } from 'react-native';

export const HEADER_STYLES = {
  container: {
    px: '$5',
    pt: Platform.OS === 'ios' ? '$16' : '$10',
    pb: '$5',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$white',
    textAlign: 'center',
    mb: '$2',
  },
  subtitleText: {
    fontSize: '$md',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    fontWeight: '$medium',
    mb: '$4',
  },
  separator: {
    w: '$16',
    h: '$0.5',
    bg: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '$sm',
  },
} as const;
