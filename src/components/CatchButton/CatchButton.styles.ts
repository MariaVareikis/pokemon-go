import { COLORS } from '@/src/constants/colors';

export const CATCH_BUTTON_STYLES = {
  container: {
    mt: '$4',
    borderRadius: '$md',
    px: '$6',
    py: '$3',
    bg: '#818cf8',
    shadowColor: '#4f63e6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    ':pressed': {
      bg: '#5a6ad1',
    },
  },

  containerLoading: {
    bg: 'rgba(16, 185, 129, 0.95)',
    shadowColor: '#10B981',
  },

  containerDisabled: {
    bg: 'rgba(156, 163, 175, 0.8)',
    shadowColor: '#9CA3AF',
    shadowOpacity: 0.2,
  },

  content: {
    space: 'xs',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: COLORS.WHITE_90,
    fontWeight: '$extrabold',
    fontSize: '$md',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  icon: {
    width: 22,
    height: 22,
  },

  spinner: {
    width: 22,
    height: 22,
  },
} as const;
