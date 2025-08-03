import { COLORS } from '@/src/constants/colors';

export const POKEMON_CARD_STYLES = {
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

  containerFavorite: {
    borderColor: '#FFD700',
    borderWidth: 2,
    shadowColor: '#FFD700',
    shadowOpacity: 0.3,
    elevation: 6,
  },

  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    mb: '$3',
  },

  nameSection: {
    flex: 1,
    alignItems: 'flex-start',
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    space: 'xs',
    justifyContent: 'flex-start',
  },

  pokemonName: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$white',
    textTransform: 'capitalize',
    mb: '$1',
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'left',
  },

  editButton: {
    p: '$1',
    borderRadius: '$sm',
    bg: 'rgba(255, 255, 255, 0.1)',
    ml: '$2',
  },

  editIcon: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },

  realName: {
    fontSize: '$lg',
    color: COLORS.WHITE_90,
    fontStyle: 'italic',
    mb: '$1',
    textAlign: 'left',
  },

  pokemonId: {
    fontSize: '$lg',
    color: COLORS.WHITE_80,
    mb: '$2',
    textAlign: 'left',
    fontWeight: '$medium',
  },

  favoriteSection: {
    alignItems: 'flex-end',
  },

  favoriteButton: {
    p: '$2',
    borderRadius: '$full',
    bg: COLORS.WHITE_10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
  },

  favoriteIcon: {
    fontSize: 24,
    textAlign: 'center',
  },

  imageSection: {
    alignItems: 'center',
    mb: '$3',
  },

  pokemonImage: {
    width: 160,
    height: 160,
    borderRadius: 20,
  },

  typesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    mb: '$4',
    width: '100%',
  },

  typesList: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  typeSeparator: {
    width: 8,
  },

  typeChip: {
    bg: COLORS.WHITE_20,
    px: '$3',
    py: '$1.5',
    borderRadius: '$full',
  },

  typeText: {
    color: '$white',
    fontSize: '$md',
    fontWeight: '$medium',
    textTransform: 'capitalize',
    textAlign: 'center',
  },

  dateTimeContainer: {
    alignItems: 'center',
    mb: '$3',
    space: 'xs',
    width: '100%',
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    space: 'xs',
  },

  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    space: 'xs',
  },

  dateLabel: {
    fontSize: '$md',
    color: COLORS.WHITE_60,
    fontWeight: '$medium',
    textAlign: 'right',
  },

  dateText: {
    fontSize: '$md',
    color: COLORS.WHITE_80,
    fontWeight: '$semibold',
    textAlign: 'center',
  },

  timeText: {
    fontSize: '$md',
    fontWeight: '$medium',
    color: COLORS.WHITE_80,
    textAlign: 'center',
  },

  timeLabel: {
    fontSize: '$md',
    color: COLORS.WHITE_60,
    textAlign: 'right',
  },

  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    mt: '$2',
    pt: '$2',
    borderTopWidth: 1,
    borderTopColor: COLORS.WHITE_20,
  },

  deleteButton: {
    bg: 'rgba(220, 53, 69, 0.8)',
    px: '$4',
    py: '$2.5',
    borderRadius: '$md',
    flexDirection: 'row',
    alignItems: 'center',
    space: 'xs',
  },

  deleteButtonText: {
    color: '$white',
    fontSize: '$sm',
    fontWeight: '$bold',
    textAlign: 'center',
    mr: '$1',
  },

  deleteIcon: {
    fontSize: 18,
    textAlign: 'center',
  },

  dialogTitle: {
    fontSize: '$lg',
    fontWeight: '$bold',
  },

  dialogMessage: {
    fontSize: '$md',
    textAlign: 'center',
  },

  dialogWarning: {
    fontSize: '$sm',
    color: '$red500',
    textAlign: 'center',
    mt: '$2',
  },

  dialogFooter: {
    space: 'md',
    w: '$full',
    justifyContent: 'space-between',
  },

  cancelButton: {
    variant: 'outline',
    flex: 1,
  },

  confirmButton: {
    bg: '$red500',
    flex: 1,
  },

  confirmButtonText: {
    color: '$white',
  },
} as const;
