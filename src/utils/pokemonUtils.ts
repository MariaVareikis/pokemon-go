import { CollectedPokemon } from '@/src/types/pokemon';
import { PokemonData } from '@/src/types/api';
import { SortOption } from '@/src/types/ui';

export const createCollectedPokemon = (
  pokemonData: PokemonData,
): CollectedPokemon => ({
  id: pokemonData.id,
  name: pokemonData.name,
  imageUrl: pokemonData.sprites.other['official-artwork'].front_default,
  types: pokemonData.types.map(t => t.type.name),
  collectedAt: new Date().toISOString(),
  collectionId: `${pokemonData.id}-${Date.now()}`,
  nickname: pokemonData.name,
  isFavorite: false,
});

export const getDisplayName = (pokemon: CollectedPokemon): string => {
  return pokemon.nickname || pokemon.name;
};

export const formatCatchDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('he-IL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const sortFunctions = {
  'date-asc': (a: CollectedPokemon, b: CollectedPokemon) =>
    new Date(a.collectedAt).getTime() - new Date(b.collectedAt).getTime(),

  'date-desc': (a: CollectedPokemon, b: CollectedPokemon) =>
    new Date(b.collectedAt).getTime() - new Date(a.collectedAt).getTime(),

  'name-asc': (a: CollectedPokemon, b: CollectedPokemon) =>
    getDisplayName(a).localeCompare(getDisplayName(b), 'he'),

  'name-desc': (a: CollectedPokemon, b: CollectedPokemon) =>
    getDisplayName(b).localeCompare(getDisplayName(a), 'he'),
} as const;

export const sortPokemon = (
  pokemon: CollectedPokemon[],
  sortBy: SortOption,
): CollectedPokemon[] => {
  return [...pokemon].sort(sortFunctions[sortBy]);
};

export const filterPokemon = (
  pokemon: CollectedPokemon[],
  searchQuery: string,
  showFavoritesOnly: boolean,
): CollectedPokemon[] => {
  return pokemon.filter(p => {
    const matchesSearch =
      searchQuery === '' ||
      getDisplayName(p).toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFavorites = !showFavoritesOnly || p.isFavorite;

    return matchesSearch && matchesFavorites;
  });
};
