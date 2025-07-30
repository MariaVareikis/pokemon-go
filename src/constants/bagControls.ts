import { SortOption } from "../types/enums/sortOptions.types";

export const BAG_CONTROLS_CONTENT = {
  SEARCH_TITLE: 'חיפוש לפי כינוי',
  SEARCH_PLACEHOLDER: 'הקלד כינוי...',
  FILTER_TITLE: 'סינון',
  SORT_TITLE: 'מיון',
  FAVORITES_ONLY: 'מועדפים בלבד',
  CLEAR_SEARCH: 'נקה',
  STATS: {
    SHOWN: 'מוצגים',
    FAVORITES: 'מועדפים',
    TOTAL: 'סה״כ',
  },
  EMOJIS: {
    FAVORITE_ACTIVE: '❤️',
    FAVORITE_INACTIVE: '🤍',
  },
} as const;

export const SORT_OPTIONS = {
  DATE_DESC: { value: SortOption.DATE_DESC, label: 'חדש → ישן' },
  DATE_ASC: { value: SortOption.DATE_ASC, label: 'ישן → חדש' },
  NAME_ASC: { value: SortOption.NAME_ASC, label: 'א → ת' },
  NAME_DESC: { value: SortOption.NAME_DESC, label: 'ת → א' },
} as const;
