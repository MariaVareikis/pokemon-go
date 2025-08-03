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
    width: 150,
    height: 150,
    borderRadius: 16,
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
    alignItems: 'center',
    justifyContent: 'center',
    mb: '$4',
    width: '100%',
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

  collectionInfoContainer: {
    bg: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '$md',
    p: '$2',
    mb: '$2',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    width: '100%',
  },

  collectionInfoRow: {
    alignItems: 'center',
    space: 'xs',
  },

  collectionIcon: {
    fontSize: 16,
  },

  collectionMainText: {
    fontSize: '$sm',
    fontWeight: '$semibold',
    color: '$white',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  collectionSubText: {
    fontSize: '$xs',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontWeight: '$medium',
    mt: '$1',
  },
  typesList: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  typeSeparator: {
    width: 8,
  },
} as const;
