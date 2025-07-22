import { useState } from 'react';
import axios from 'axios';
import { getPokemon } from '../services/pokemonService';
import { PokemonSearchState } from '../types/pokemonTypes';

export const usePokemonSearch = () => {
  const [state, setState] = useState<PokemonSearchState>({
    searchedPokemon: undefined,
    isSearching: false,
    searchError: '',
  });

  const executeSearch = async (query: string) => {
    if (!query.trim()) return;

    setState((prev) => ({ ...prev, isSearching: true, searchError: '' }));

    try {
      const pokemon = await getPokemon(query);
      
      setState({
        searchedPokemon: pokemon,
        isSearching: false,
        searchError: '',
      });
    } catch (error) {
      let errorMessage = 'שגיאה בחיפוש Pokemon';
      
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          errorMessage = 'Pokemon לא נמצא';
        } else {
          errorMessage = 'שגיאה בחיבור לשרת';
        }
      }
      
      setState({
        searchedPokemon: undefined,
        isSearching: false,
        searchError: errorMessage,
      });
    }
  };

  const resetSearchResults = () => {
    setState({
      searchedPokemon: undefined,
      isSearching: false,
      searchError: '',
    });
  };

  return {
    searchedPokemon: state.searchedPokemon,
    isSearching: state.isSearching,
    searchError: state.searchError,
    executeSearch,
    resetSearchResults,
  };
};