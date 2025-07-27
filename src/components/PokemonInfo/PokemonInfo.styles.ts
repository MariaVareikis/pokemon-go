import { COLORS } from '@/src/constants/colors';

export const POKEMON_INFO_STYLES = {
  container: {
    bg: COLORS.WHITE_10,
    borderRadius: '$xl',
    p: '$5',
    alignItems: 'center',
    mt: '$5',
    position: 'relative',
    shadowColor: COLORS.BLACK_30,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: '$lg',
  },

  name: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$white',
    textTransform: 'capitalize',
    mb: '$2',
    mt: '$4',
    textAlign: 'center',
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  id: {
    fontSize: '$lg',
    color: COLORS.WHITE_80,
    mb: '$4',
    textAlign: 'center',
    fontWeight: '$medium',
  },

  typesContainer: {
    space: 'sm',
    flexWrap: 'wrap',
    justifyContent: 'center',
    mb: '$3',
  },
  typeChip: {
    bg: COLORS.WHITE_20,
    px: '$3',
    py: '$2',
    borderRadius: '$full',
    borderWidth: 1,
    borderColor: COLORS.WHITE_40,
  },
  typeText: {
    color: '$white',
    fontSize: '$sm',
    fontWeight: '$medium',
    textTransform: 'capitalize',
  },

  catchCounter: {
    color: '$white',
    fontSize: '$md',
    fontWeight: '$bold',
    textAlign: 'center',
    bg: 'rgba(40, 167, 69, 0.8)',
    px: '$4',
    py: '$2',
    borderRadius: '$lg',
    mt: '$2',
    mb: '$3',
    shadowColor: COLORS.BLACK_30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  catchButton: {
    mt: '$4',
    borderRadius: '$lg',
    px: '$8',
    py: '$4',
    minWidth: '$40',
    bg: 'rgba(220, 53, 69, 0.9)',
    shadowColor: COLORS.BLACK_50,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  catchButtonContent: {
    alignItems: 'center',
    space: 'sm',
  },
  pokeballIcon: {
    width: 24,
    height: 24,
    tintColor: '$white',
  },
  catchButtonText: {
    color: '$white',
    fontWeight: '$bold',
    fontSize: '$lg',
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  loadingSpinner: {
    width: 24,
    height: 24,
  },
} as const;

export const SPINNER_CONFIG = {
  size: 'small' as const,
  color: 'white' as const,
} as const;
