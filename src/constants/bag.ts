export const BAG_CONTENT = {
  TITLE: 'התיק שלי',
  EMPTY_TITLE: 'תיק',
  EMPTY_SUBTITLE: 'עדיין לא תפסת אף פוקימון!',
  SEARCH_PLACEHOLDER: 'הקלד כינוי...',
  SEARCH_TITLE: 'חיפוש לפי כינוי',
  FILTER_TITLE: 'סינון',
  SORT_TITLE: 'מיון',
  FAVORITES_ONLY: 'מועדפים בלבד',
  CLEAR_SEARCH: 'נקה',
  NO_RESULTS: 'לא נמצאו פוקימונים התואמים לחיפוש',
  NO_POKEMON_IN_BAG: 'אין פוקימונים בתיק',
  CATCH_DATE_LABEL: 'תאריך תפיסה:',
  STATS: {
    SHOWN: 'מוצגים',
    FAVORITES: 'מועדפים',
    TOTAL: 'סה״כ',
  },
  COLLECTION_INFO: {
    HAS_POKEMON: 'יש ברשותך פוקימון זה:',
    ONE_POKEMON: 'פוקימון אחד בתיק',
    MULTIPLE_POKEMON: 'פוקימונים בתיק',
  },
  EMOJIS: {
    BAG: '🎒',
  },
} as const;

export const SORT_OPTIONS = {
  DATE_DESC: { value: 'date-desc' as const, label: 'חדש → ישן' },
  DATE_ASC: { value: 'date-asc' as const, label: 'ישן → חדש' },
  NAME_ASC: { value: 'name-asc' as const, label: 'א → ת' },
  NAME_DESC: { value: 'name-desc' as const, label: 'ת → א' },
} as const;
