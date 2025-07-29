import {
  BAG_CONTROLS_CONTENT,
  SORT_OPTIONS,
} from '@/src/constants/bagControls';
import {
  HStack,
  Input,
  InputField,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import { BAG_CONTROLS_STYLES as styles } from './BagControls.styles';
import { BagFilters, SortOption } from '@/src/types/ui';

interface Props {
  filters: BagFilters;
  onFiltersChange: (filters: BagFilters) => void;
  totalCount: number;
  filteredCount: number;
  favoritesCount: number;
}

const BagControls: React.FC<Props> = ({
  filters,
  onFiltersChange,
  totalCount,
  filteredCount,
  favoritesCount,
}) => {
  const handleSearchChange = (searchQuery: string) => {
    onFiltersChange({ ...filters, searchQuery });
  };

  const handleFavoritesToggle = () => {
    onFiltersChange({
      ...filters,
      showFavoritesOnly: !filters.showFavoritesOnly,
    });
  };

  const handleSortChange = (sortBy: SortOption) => {
    onFiltersChange({ ...filters, sortBy });
  };

  const clearSearch = () => {
    onFiltersChange({ ...filters, searchQuery: '' });
  };

  const favoriteButtonStyle = filters.showFavoritesOnly
    ? { ...styles.favoriteFilter, ...styles.favoriteFilterActive }
    : styles.favoriteFilter;

  const favoriteTextStyle = filters.showFavoritesOnly
    ? { ...styles.favoriteFilterText, ...styles.favoriteFilterTextActive }
    : styles.favoriteFilterText;

  return (
    <VStack {...styles.container}>
      <VStack {...styles.searchContainer}>
        <Text {...styles.sectionTitle}>
          {BAG_CONTROLS_CONTENT.SEARCH_TITLE}
        </Text>
        <HStack {...styles.filtersRow}>
          <Input {...styles.searchInput}>
            <InputField
              {...styles.searchInputField}
              value={filters.searchQuery}
              onChangeText={handleSearchChange}
              placeholder={BAG_CONTROLS_CONTENT.SEARCH_PLACEHOLDER}
            />
          </Input>
          {filters.searchQuery ? (
            <Pressable {...styles.clearButton} onPress={clearSearch}>
              <Text {...styles.clearButtonText}>
                {BAG_CONTROLS_CONTENT.CLEAR_SEARCH}
              </Text>
            </Pressable>
          ) : null}
        </HStack>
      </VStack>

      <VStack {...styles.filterContainer}>
        <Text {...styles.sectionTitle}>
          {BAG_CONTROLS_CONTENT.FILTER_TITLE}
        </Text>
        <Pressable {...favoriteButtonStyle} onPress={handleFavoritesToggle}>
          <Text {...favoriteTextStyle}>
            {BAG_CONTROLS_CONTENT.FAVORITES_ONLY}
          </Text>
          <Text {...styles.favoriteEmoji}>
            {filters.showFavoritesOnly
              ? BAG_CONTROLS_CONTENT.EMOJIS.FAVORITE_ACTIVE
              : BAG_CONTROLS_CONTENT.EMOJIS.FAVORITE_INACTIVE}
          </Text>
        </Pressable>
      </VStack>

      <VStack {...styles.sortMainContainer}>
        <Text {...styles.sectionTitle}>{BAG_CONTROLS_CONTENT.SORT_TITLE}</Text>
        <HStack {...styles.sortContainer}>
          {Object.values(SORT_OPTIONS).map(option => {
            const isActive = filters.sortBy === option.value;
            const buttonStyle = isActive
              ? { ...styles.sortButton, ...styles.sortButtonActive }
              : styles.sortButton;
            const textStyle = isActive
              ? { ...styles.sortButtonText, ...styles.sortButtonTextActive }
              : styles.sortButtonText;

            return (
              <Pressable
                key={option.value}
                {...buttonStyle}
                onPress={() => handleSortChange(option.value)}
              >
                <Text {...textStyle}>{option.label}</Text>
              </Pressable>
            );
          })}
        </HStack>
      </VStack>

      <HStack {...styles.statsContainer}>
        <VStack {...styles.statItem}>
          <Text {...styles.statNumber}>{filteredCount}</Text>
          <Text {...styles.statLabel}>{BAG_CONTROLS_CONTENT.STATS.SHOWN}</Text>
        </VStack>

        <VStack {...styles.statItem}>
          <Text {...styles.statNumber}>{favoritesCount}</Text>
          <Text {...styles.statLabel}>
            {BAG_CONTROLS_CONTENT.STATS.FAVORITES}
          </Text>
        </VStack>

        <VStack {...styles.statItem}>
          <Text {...styles.statNumber}>{totalCount}</Text>
          <Text {...styles.statLabel}>{BAG_CONTROLS_CONTENT.STATS.TOTAL}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default BagControls;
