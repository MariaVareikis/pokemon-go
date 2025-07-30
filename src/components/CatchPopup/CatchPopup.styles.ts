import { COLORS } from '@/src/constants/colors';

export const CATCH_POPUP_STYLES = {
  modal: {
    size: 'lg',
  },

  modalContent: {
    bg: COLORS.WHITE,
    borderRadius: '$xl',
    mx: '$4',
    minWidth: 320,
    maxWidth: '90%',
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },

  modalBody: {
    p: '$6',
  },

  mainContainer: {
    space: 'lg',
    alignItems: 'center',
    width: '100%',
  },

  messageContainer: {
    alignItems: 'center',
    width: '100%',
    space: 'sm',
  },

  headerContainer: {
    space: '$3',
    alignItems: 'center',
    w: '100%',
  },

  celebrationIcon: {
    fontSize: '$3xl',
    mb: '$2',
  },

  messageText: {
    color: COLORS.BLACK_50,
    fontSize: '$lg',
    fontWeight: '$semibold',
    textAlign: 'center',
    lineHeight: '$lg',
  },

  pokemonNameText: {
    color: COLORS.BLACK,
    fontSize: '$xl',
    fontWeight: '$bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    lineHeight: '$xl',
  },

  modalCloseButton: {
    position: 'absolute',
    top: '$3',
    left: '$3',
    zIndex: 1,
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
