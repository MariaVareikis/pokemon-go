import { COLORS } from '@/src/constants/colors';

export const BAG_CONTROLS_STYLES = {
  container: {
    bg: COLORS.WHITE_10,
    borderRadius: '$lg',
    p: '$4',
    mb: '$4',
    mx: '$3',
    shadowColor: COLORS.BLACK_30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: COLORS.WHITE_20,
  },

  searchContainer: {
    mb: '$4',
  },

  searchInput: {
    bg: COLORS.WHITE_20,
    borderRadius: '$md',
    borderWidth: 0,
    flex: 1,
  },

  searchInputField: {
    px: '$3',
    py: '$2',
    fontSize: '$md',
    color: '$white',
    placeholderTextColor: COLORS.WHITE_60,
    textAlign: 'right',
  },

  filtersRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mb: '$4',
  },

  // Новые стили для контейнера фильтров
  filterContainer: {
    space: 'sm',
    mb: '$4',
  },

  favoriteFilter: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    bg: COLORS.WHITE_20,
    px: '$3',
    py: '$2',
    borderRadius: '$md',
  },

  favoriteFilterActive: {
    bg: '#FFD700',
  },

  favoriteFilterText: {
    color: '$white',
    fontSize: '$sm',
    fontWeight: '$medium',
    ml: '$2',
  },

  favoriteFilterTextActive: {
    color: '$black',
  },

  // Новые стили для эмодзи сердечка
  favoriteEmoji: {
    fontSize: 16,
  },

  // Новый контейнер для сортировки
  sortMainContainer: {
    space: 'sm',
  },

  sortContainer: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    gap: 8,
  },

  sortButton: {
    bg: COLORS.WHITE_20,
    px: '$3',
    py: '$2',
    borderRadius: '$md',
    minWidth: '$20',
    alignItems: 'center',
  },

  sortButtonActive: {
    bg: COLORS.WHITE_90,
  },

  sortButtonText: {
    color: '$white',
    fontSize: '$xs',
    fontWeight: '$medium',
    textAlign: 'center',
  },

  sortButtonTextActive: {
    color: '$black',
  },

  sectionTitle: {
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$white',
    mb: '$2',
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'right',
  },

  statsContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    mt: '$3',
    pt: '$3',
    borderTopWidth: 1,
    borderTopColor: COLORS.WHITE_20,
  },

  statItem: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: '$lg',
    fontWeight: '$bold',
    color: '$white',
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  statLabel: {
    fontSize: '$xs',
    color: COLORS.WHITE_80,
    fontWeight: '$medium',
    textAlign: 'center',
  },

  clearButton: {
    bg: 'rgba(220, 53, 69, 0.8)',
    px: '$2',
    py: '$1',
    borderRadius: '$sm',
    ml: '$0',
    mr: '$2',
  },

  clearButtonText: {
    color: '$white',
    fontSize: '$xs',
    fontWeight: '$medium',
  },
} as const;
