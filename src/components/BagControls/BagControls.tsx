import {
  BAG_CONTROLS_CONTENT,
  SORT_OPTIONS,
} from '@/src/constants/bagControls';
import { BagFilters } from '@/src/types/interfaces/ui.types';
import { SortOption } from '@/src/types/enums/sortOptions.types';
import {
  HStack,
  Input,
  InputField,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { FlatList } from 'react-native';
import React from 'react';
import { BAG_CONTROLS_STYLES as styles } from './BagControls.styles';

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

  const sortOptions = Object.values(SORT_OPTIONS);

  const renderSortButton = ({
    item,
  }: {
    item: (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];
  }) => {
    const isActive = filters.sortBy === item.value;

    return (
      <Pressable
        key={item.value}
        {...styles.sortButton}
        {...(isActive && styles.sortButtonActive)}
        onPress={() => handleSortChange(item.value as SortOption)}
      >
        <Text
          {...styles.sortButtonText}
          {...(isActive && styles.sortButtonTextActive)}
        >
          {item.label}
        </Text>
      </Pressable>
    );
  };

  const SortSeparator = () => <VStack {...styles.sortSeparator} />;

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
        <Pressable
          {...styles.favoriteFilter}
          {...(filters.showFavoritesOnly && styles.favoriteFilterActive)}
          onPress={handleFavoritesToggle}
        >
          <Text
            {...styles.favoriteFilterText}
            {...(filters.showFavoritesOnly && styles.favoriteFilterTextActive)}
          >
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
        <VStack {...styles.sortContainer}>
          <FlatList
            data={sortOptions}
            renderItem={renderSortButton}
            keyExtractor={item => item.value}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={SortSeparator}
            contentContainerStyle={styles.sortList}
          />
        </VStack>
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
