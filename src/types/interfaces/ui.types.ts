import { SortOption } from "../enums/sortOptions.types";

export interface BagFilters {
  searchQuery: string;
  showFavoritesOnly: boolean;
  sortBy: SortOption;
}
