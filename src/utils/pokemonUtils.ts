import { PokemonData } from '@/src/types/interfaces/api.types';
import { CollectedPokemons } from '@/src/types/interfaces/pokemon.types';
import { SortOption } from '@/src/types/enums/sortOptions.types';

export const createCollectedPokemon = (
  pokemonData: PokemonData,
): CollectedPokemons => ({
  id: pokemonData.id,
  name: pokemonData.name,
  imageUrl: pokemonData.sprites.other['official-artwork'].front_default,
  types: pokemonData.types.map(t => t.type.name),
  collectedAt: new Date().toISOString(),
  collectionId: `${pokemonData.id}-${Date.now()}`,
  nickname: pokemonData.name,
  isFavorite: false,
});

export const getDisplayName = (pokemon: CollectedPokemons): string => {
  return pokemon.nickname || pokemon.name;
};

export const formatCatchDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('he-IL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export const formatCatchTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('he-IL', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const sortFunctions = {
  [SortOption.DATE_ASC]: (a: CollectedPokemons, b: CollectedPokemons) =>
    new Date(a.collectedAt).getTime() - new Date(b.collectedAt).getTime(),

  [SortOption.DATE_DESC]: (a: CollectedPokemons, b: CollectedPokemons) =>
    new Date(b.collectedAt).getTime() - new Date(a.collectedAt).getTime(),

  [SortOption.NAME_ASC]: (a: CollectedPokemons, b: CollectedPokemons) =>
    getDisplayName(a).localeCompare(getDisplayName(b), 'he'),

  [SortOption.NAME_DESC]: (a: CollectedPokemons, b: CollectedPokemons) =>
    getDisplayName(b).localeCompare(getDisplayName(a), 'he'),
} as const;

const filterFunctions = {
  search: (pokemon: CollectedPokemons, query: string) => {
    if (!query) return true;
    return getDisplayName(pokemon).toLowerCase().includes(query.toLowerCase());
  },

  favorites: (pokemon: CollectedPokemons, showFavoritesOnly: boolean) => {
    if (!showFavoritesOnly) return true;
    return pokemon.isFavorite;
  },

  type: (pokemon: CollectedPokemons, typeFilter?: string) => {
    if (!typeFilter) return true;
    return pokemon.types.includes(typeFilter);
  },

  dateRange: (
    pokemon: CollectedPokemons,
    dateRange?: { from: Date; to: Date },
  ) => {
    if (!dateRange) return true;
    const pokemonDate = new Date(pokemon.collectedAt);
    return pokemonDate >= dateRange.from && pokemonDate <= dateRange.to;
  },
} as const;

export const sortPokemon = (
  pokemon: CollectedPokemons[],
  sortBy: SortOption,
): CollectedPokemons[] => {
  return [...pokemon].sort(sortFunctions[sortBy]);
};

export const filterPokemon = (
  pokemon: CollectedPokemons[],
  searchQuery: string = '',
  showFavoritesOnly: boolean = false,
): CollectedPokemons[] => {
  return pokemon.filter(p => {
    return (
      filterFunctions.search(p, searchQuery) &&
      filterFunctions.favorites(p, showFavoritesOnly)
    );
  });
};
