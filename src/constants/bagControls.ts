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
  DATE_DESC: { value: 'date-desc' as const, label: 'חדש → ישן' },
  DATE_ASC: { value: 'date-asc' as const, label: 'ישן → חדש' },
  NAME_ASC: { value: 'name-asc' as const, label: 'א → ת' },
  NAME_DESC: { value: 'name-desc' as const, label: 'ת → א' },
} as const;
