import { COLORS } from '@/src/constants/colors';

export const CATCH_POPUP_STYLES = {
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    bg: COLORS.BLACK_50,
    zIndex: 1000,
  },
  popup: {
    bg: COLORS.WHITE,
    borderRadius: '$2xl',
    p: '$6',
    minWidth: '$80',
    maxWidth: '$96',
    alignItems: 'center',
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  successPopup: {
    bg: 'rgba(40, 167, 69, 0.95)', 
  },
  failurePopup: {
    bg: 'rgba(220, 53, 69, 0.95)', 
  },
  warningPopup: {
    bg: 'rgba(255, 193, 7, 0.95)', 
  },
  iconContainer: {
    mb: '$4',
    alignItems: 'center',
  },
  pokeballIcon: {
    width: 48,
    height: 48,
    mb: '$2',
  },
  emoji: {
    fontSize: '$4xl',
    mb: '$2',
  },
  messageText: {
    color: '$white',
    fontSize: '$lg',
    fontWeight: '$bold',
    textAlign: 'center',
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  pokemonNameText: {
    color: '$white',
    fontSize: '$xl',
    fontWeight: '$bold',
    textAlign: 'center',
    mt: '$1',
  },
} as const;
