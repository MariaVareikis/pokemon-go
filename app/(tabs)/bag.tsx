import { BAG_CONTENT } from '@/src/constants/bag';
import { useAppSelector } from '@/src/store/hooks';
import { selectCollectedPokemon } from '@/src/store/slices/pokemonSlice';
import { BAG_SCREEN_STYLES as styles } from '@/src/styles/BagScreen.styles';
import { filterPokemon, sortPokemon } from '@/src/utils/pokemonUtils';
import { Text, VStack } from '@gluestack-ui/themed';
import { FlatList } from 'react-native';
import React, { useMemo, useState } from 'react';

import BagControls from '@/src/components/BagControls/BagControls';
import PokemonCard from '@/src/components/PokemonCard/PokemonCard';
import { BagFilters } from '@/src/types/interfaces/ui.types';
import { SortOption } from '@/src/types/enums/sortOptions.types';
import { CollectedPokemons } from '@/src/types/interfaces/pokemon.types';

const BagTab: React.FC = () => {
  const collectedPokemon = useAppSelector(selectCollectedPokemon);

  const [filters, setFilters] = useState<BagFilters>({
    searchQuery: '',
    showFavoritesOnly: false,
    sortBy: SortOption.DATE_DESC,
  });

  const processedPokemon = useMemo(() => {
    let filtered = filterPokemon(
      collectedPokemon,
      filters.searchQuery,
      filters.showFavoritesOnly,
    );
    return sortPokemon(filtered, filters.sortBy);
  }, [collectedPokemon, filters]);

  const stats = {
    total: collectedPokemon.length,
    filtered: processedPokemon.length,
    favorites: collectedPokemon.filter(p => p.isFavorite).length,
  };

  const renderPokemonCard = ({ item }: { item: CollectedPokemons }) => (
    <PokemonCard pokemon={item} />
  );

  const ItemSeparator = () => <VStack {...styles.pokemonSeparator} />;

  const ListHeader = () => (
    <VStack>
      <Text {...styles.titleRTL}>{BAG_CONTENT.TITLE}</Text>
      <BagControls
        filters={filters}
        onFiltersChange={setFilters}
        totalCount={stats.total}
        filteredCount={stats.filtered}
        favoritesCount={stats.favorites}
      />
    </VStack>
  );

  const EmptyListComponent = () => (
    <VStack {...styles.noResultsContainerRTL}>
      <Text {...styles.noResultsEmojiRTL}>🔍</Text>
      <Text {...styles.noResultsTextRTL}>
        {filters.searchQuery || filters.showFavoritesOnly
          ? BAG_CONTENT.NO_RESULTS
          : BAG_CONTENT.NO_POKEMON_IN_BAG}
      </Text>
    </VStack>
  );

  if (collectedPokemon.length === 0) {
    return (
      <VStack {...styles.containerRTL}>
        <Text {...styles.titleRTL}>{BAG_CONTENT.EMPTY_TITLE}</Text>
        <Text {...styles.subtitleRTL}>{BAG_CONTENT.EMPTY_SUBTITLE}</Text>
        <Text {...styles.emptyBagEmojiRTL}>{BAG_CONTENT.EMOJIS.BAG}</Text>
      </VStack>
    );
  }

  return (
    <VStack {...styles.mainContainerRTL}>
      <FlatList
        data={processedPokemon}
        renderItem={renderPokemonCard}
        keyExtractor={item => item.collectionId}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={EmptyListComponent}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.flatListContent}
      />
    </VStack>
  );
};

export default BagTab;
