import { COLORS } from '@/src/constants/colors';

export const SEARCH_SCREEN_STYLES = {
  container: {
    flex: 1,
    px: '$6',
    bg: COLORS.TRANSPARENT,
  },
  mainVStack: {
    space: 'lg',
    mt: '$6',
    pb: '$20',
  },
  title: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$white',
    textAlign: 'center',
    mb: '$5',
  },
  searchHStack: {
    space: 'md',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    bg: COLORS.WHITE_10,
    borderRadius: '$lg',
    borderWidth: 0,
  },
  inputField: {
    px: '$4',
    py: '$3',
    fontSize: '$md',
    color: '$white',
    placeholderTextColor: COLORS.WHITE_60,
  },
  searchButton: {
    bg: COLORS.WHITE_20,
    px: '$5',
    py: '$3',
    borderRadius: '$lg',
    minWidth: '$20',
  },
  loadingContainer: {
    alignItems: 'center',
    py: '$5',
  },
  loadingText: {
    color: '$white',
    fontSize: '$md',
    mt: '$3',
  },
  errorText: {
    color: COLORS.ERROR,
    textAlign: 'center',
    fontSize: '$md',
    fontWeight: '$bold',
  },
  spinnerProps: {
    size: 'large',
    color: '$white',
  },
  disabledButton: {
    opacity: 0.5,
  },
  pokemonContainer: {
    bg: COLORS.WHITE_10,
    borderRadius: '$xl',
    p: '$5',
    alignItems: 'center',
    mt: '$5',
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  pokemonName: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$white',
    textTransform: 'capitalize',
    mb: '$2',
    mt: '$4',
  },
  pokemonId: {
    fontSize: '$lg',
    color: COLORS.WHITE_80,
    mb: '$4',
  },

  typesHStack: {
    space: 'sm',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  typeChip: {
    bg: COLORS.WHITE_20,
    px: '$3',
    py: '$2',
    borderRadius: '$full',
  },
  typeText: {
    color: '$white',
    fontSize: '$sm',
    fontWeight: '$medium',
  },

  catchButtonStyle: {
    marginTop: 16,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 100,
    minHeight: 40,
    backgroundColor: 'rgba(220, 53, 69, 0.95)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  } as const,

  catchButtonIcon: {
    width: 18,
    height: 18,
  } as const,

  catchButtonText: {
    color: 'white',
    fontWeight: 'bold' as const,
    fontSize: 15,
  } as const,
} as const;
