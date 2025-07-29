export const BAG_SCREEN_STYLES = {
  scrollContainerRTL: {
    flex: 1,
    bg: 'transparent',
    px: '$3',
    writingDirection: 'rtl',
    textAlign: 'right',
  },

  mainContainerRTL: {
    space: 'md',
    mt: '$6',
    pb: '$24',
    alignItems: 'flex-end',
  },

  containerRTL: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    px: '$5',
    bg: 'transparent',
    pb: '$20',
    writingDirection: 'rtl',
  },

  titleRTL: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$white',
    textAlign: 'right',
    mb: '$3',
    alignSelf: 'flex-end',
  },

  subtitleRTL: {
    fontSize: '$md',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'right',
    fontWeight: '$medium',
    alignSelf: 'flex-end',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    px: '$5',
    bg: 'transparent',
    pb: '$20',
  },

  title: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$white',
    textAlign: 'center',
    mb: '$3',
  },

  subtitle: {
    fontSize: '$md',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontWeight: '$medium',
  },

  // Новые стили для элементов, которые были инлайновыми
  emptyBagEmojiRTL: {
    fontSize: 48,
    textAlign: 'center',
    marginTop: 20,
  },

  noResultsContainerRTL: {
    alignItems: 'center',
    justifyContent: 'center',
    py: '$8',
    space: 'md',
    width: '100%',
  },

  noResultsEmojiRTL: {
    fontSize: 32,
  },

  noResultsTextRTL: {
    fontSize: '$lg',
    color: '$white',
    textAlign: 'center',
    fontWeight: '$semibold',
    px: '$4',
  },

  pokemonListContainerRTL: {
    space: 'sm',
  },
} as const;
