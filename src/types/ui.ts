export type SortOption = 'date-asc' | 'date-desc' | 'name-asc' | 'name-desc';

export interface BagFilters {
  searchQuery: string;
  showFavoritesOnly: boolean;
  sortBy: SortOption;
}