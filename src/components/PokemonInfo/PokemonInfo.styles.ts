import { COLORS } from '@/src/constants/colors';

export const POKEMON_INFO_STYLES = {
  container: {
    bg: COLORS.WHITE_10,
    borderRadius: '$lg',
    p: '$4',
    alignItems: 'center',
    mt: '$3',
    marginHorizontal: 4,
    width: '98%',
    alignSelf: 'center',
    shadowColor: COLORS.BLACK_30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 16, // Изменил с '$lg' на число для Image
  },

  name: {
    fontSize: '$xl',
    fontWeight: '$bold',
    color: '$white',
    textTransform: 'capitalize',
    mb: '$1',
    mt: '$3',
    textAlign: 'center',
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  id: {
    fontSize: '$md',
    color: COLORS.WHITE_80,
    mb: '$3',
    textAlign: 'center',
    fontWeight: '$medium',
  },

  typesContainer: {
    space: 'xs',
    flexWrap: 'wrap',
    justifyContent: 'center',
    mb: '$2',
  },

  typeChip: {
    bg: COLORS.WHITE_20,
    px: '$2',
    py: '$1',
    borderRadius: '$full',
  },

  typeText: {
    color: '$white',
    fontSize: '$sm',
    fontWeight: '$medium',
    textTransform: 'capitalize',
  },

  catchButton: {
    mt: '$3',
    borderRadius: '$md',
    px: '$6',
    py: '$3',
    minWidth: '$32',
    bg: 'rgba(220, 53, 69, 0.9)',
    shadowColor: COLORS.BLACK_50,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  catchButtonContent: {
    alignItems: 'center',
    space: 'sm',
  },

  pokeballIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF', // Изменил с '$white' на цвет для Image
  },

  catchButtonText: {
    color: '$white',
    fontWeight: '$extrabold', // Сделал жирнее
    fontSize: '$md',
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  loadingSpinner: {
    width: 20,
    height: 20,
  },

  SPINNER_CONFIG: {
    size: 'small' as const,
    color: 'white' as const,
  },
} as const;
