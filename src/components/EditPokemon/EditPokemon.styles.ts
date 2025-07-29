import { COLORS } from '@/src/constants/colors';

export const EDIT_POKEMON_STYLES = {
  modalBackdrop: {
    bg: 'rgba(0, 0, 0, 0.6)',
  },

  modalContent: {
    bg: '$white',
    borderRadius: '$xl',
    p: '$6',
    mx: '$4',
    minWidth: '85%',
    maxWidth: '90%',
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },

  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '$5',
    pb: '$3',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BLACK_10,
  },

  title: {
    fontSize: '$xl',
    fontWeight: '$bold',
    color: COLORS.BLACK,
    textAlign: 'right',
  },

  closeButton: {
    bg: COLORS.BLACK_10,
    borderRadius: '$full',
    p: '$2',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButtonText: {
    color: COLORS.BLACK_50,
    fontSize: '$md',
    fontWeight: '$bold',
  },

  pokemonInfo: {
    alignItems: 'center',
    mb: '$5',
  },

  pokemonImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginBottom: 12,
  },

  pokemonName: {
    fontSize: '$lg',
    fontWeight: '$semibold',
    color: COLORS.BLACK_50,
    textAlign: 'center',
  },

  inputContainer: {
    mb: '$4',
    alignItems: 'flex-end',
    width: '100%',
  },

  label: {
    fontSize: '$md',
    fontWeight: '$semibold',
    color: COLORS.BLACK,
    marginBottom: 8,
    textAlign: 'right',
    writingDirection: 'rtl',
  },

  input: {
    bg: COLORS.BLACK_10,
    borderRadius: '$md',
    borderWidth: 1,
    borderColor: COLORS.BLACK_30,
    width: '100%',
    alignSelf: 'flex-end',
  },

  inputField: {
    px: '$3',
    py: '$3',
    fontSize: '$md',
    color: COLORS.BLACK,
    textAlign: 'right',
    writingDirection: 'rtl',
  },

  favoriteContainer: {
    mb: '$4',
    width: '100%',
    alignItems: 'center',
  },

  favoriteButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    bg: COLORS.WHITE,
    px: '$4',
    py: '$2',
    borderRadius: '$md',
    borderWidth: 1,
    borderColor: COLORS.BLACK_30,
    gap: 8,
  },

  favoriteButtonActive: {
    bg: '#FFD700',
    borderColor: '#FFA500',
  },

  favoriteButtonText: {
    fontSize: '$sm',
    fontWeight: '$medium',
    color: COLORS.BLACK,
  },

  favoriteIcon: {
    fontSize: 18,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },

  cancelButton: {
    flex: 1,
    bg: COLORS.BLACK_10,
    borderRadius: '$md',
    py: '$3',
    alignItems: 'center',
  },

  cancelButtonText: {
    color: COLORS.BLACK_50,
    fontSize: '$md',
    fontWeight: '$semibold',
  },

  saveButton: {
    flex: 1,
    bg: '#4F46E5',
    borderRadius: '$md',
    py: '$3',
    alignItems: 'center',
  },

  saveButtonDisabled: {
    opacity: 0.5,
  },

  saveButtonText: {
    color: '$white',
    fontSize: '$md',
    fontWeight: '$bold',
  },

  characterCount: {
    fontSize: '$xs',
    color: COLORS.BLACK_50,
    textAlign: 'right',
    marginTop: 4,
  },

  characterCountLimit: {
    color: '#DC2626',
  },
} as const;
