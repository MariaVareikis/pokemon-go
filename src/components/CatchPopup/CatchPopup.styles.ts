import { COLORS } from '@/src/constants/colors';

export const CATCH_POPUP_STYLES = {
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 999999,
  },

  blurLayer1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    bg: COLORS.WHITE_10,
  },

  blurLayer2: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    bg: COLORS.BLACK_10,
  },

  blurLayer3: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    bg: COLORS.WHITE_10,
  },

  blurPressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    px: '$5',
    py: '$5',
    bg: COLORS.WHITE,
    borderRadius: '$lg',
    mx: '$10',
    maxWidth: '80%',
    minWidth: 280,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
    position: 'relative',
    overflow: 'hidden',
  },

  closeButton: {
    position: 'absolute',
    top: '$3',
    right: '$3',
    bg: COLORS.BLACK_10,
    borderRadius: '$lg',
    p: '$2',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButtonText: {
    color: COLORS.BLACK_50,
    fontSize: '$sm',
    fontWeight: '$bold',
  },

  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    mb: '$4',
    space: 'md',
  },

  celebrationIcon: {
    fontSize: '$2xl',
  },

  messageContainer: {
    alignItems: 'center',
    flex: 1,
  },

  messageText: {
    color: COLORS.BLACK_50,
    fontSize: '$md',
    fontWeight: '$semibold',
    textAlign: 'center',
    mb: '$1',
  },

  pokemonNameText: {
    color: COLORS.BLACK,
    fontSize: '$lg',
    fontWeight: '$bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  pokemonImage: {
    width: 80,
    height: 80,
    marginBottom: 12,
    borderRadius: 12,
  },

  statusBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
  },
} as const;
