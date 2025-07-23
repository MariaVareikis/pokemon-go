import { useState } from 'react';
import axios from 'axios';
import { getPokemon } from '@/src/services/pokemonService';
import { PokemonSearchState } from '@/src/types/pokemonTypes';
import { SEARCH_ERROR_MESSAGES } from '@/src/constants/hooks';

const INITIAL_SEARCH_STATE: PokemonSearchState = {
  isSearching: false,
  searchError: '',
};

export const usePokemonSearch = () => {
  const [searchState, setSearchState] =
    useState<PokemonSearchState>(INITIAL_SEARCH_STATE);

  const searchForPokemon = async (pokemonQuery: string) => {
    if (!pokemonQuery.trim()) return;

    setSearchState({
      searchedPokemon: searchState.searchedPokemon,
      isSearching: true,
      searchError: '',
    });

    try {
      const foundPokemon = await getPokemon(pokemonQuery);
      setSearchState({
        searchedPokemon: foundPokemon,
        isSearching: false,
        searchError: '',
      });
    } catch (searchError) {
      const isNotFoundError =
        axios.isAxiosError(searchError) && searchError.response?.status === 404;
      const errorMessage = isNotFoundError
        ? SEARCH_ERROR_MESSAGES.POKEMON_NOT_FOUND
        : SEARCH_ERROR_MESSAGES.SERVER_CONNECTION_ERROR;

      setSearchState({
        isSearching: false,
        searchError: errorMessage,
      });
    }
  };

  const clearSearchResults = () => setSearchState(INITIAL_SEARCH_STATE);

  return {
    searchedPokemon: searchState.searchedPokemon,
    isSearching: searchState.isSearching,
    searchError: searchState.searchError,
    searchForPokemon,
    clearSearchResults,
  };
};
