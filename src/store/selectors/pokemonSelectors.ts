import { RootState } from '@/src/store';

export const selectCollectedPokemon = (state: RootState) => state.pokemon.collectedPokemon;
export const selectSearchedPokemon = (state: RootState) => state.pokemon.searchedPokemon;
export const selectIsCatching = (state: RootState) => state.pokemon.isCatching;
export const selectIsSearching = (state: RootState) => state.pokemon.isSearching;
export const selectCatchError = (state: RootState) => state.pokemon.catchError;
export const selectSearchError = (state: RootState) => state.pokemon.searchError;

export const isPokemonCollected = (state: RootState, pokemonId: number) =>
  state.pokemon.collectedPokemon.some(p => p.id === pokemonId);

export const getCollectedCount = (state: RootState, pokemonId: number) =>
  state.pokemon.collectedPokemon.filter(p => p.id === pokemonId).length;

export const getTotalCollected = (state: RootState) =>
  state.pokemon.collectedPokemon.length;
