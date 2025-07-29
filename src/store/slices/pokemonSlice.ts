import { CATCH_MESSAGES } from '@/src/constants/catch';
import { TIMING } from '@/src/constants/storage';
import { getPokemon } from '@/src/services/pokemonService';
import { PokemonData } from '@/src/types/api';
import { CatchAttemptResult } from '@/src/types/operations';
import { PokemonCollectionState, PokemonSearchState } from '@/src/types/store';
import handleApiError from '@/src/utils/errorUtils';
import { createCollectedPokemon } from '@/src/utils/pokemonUtils';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PopupData {
  success: boolean;
  pokemonName?: string;
  pokemonImage?: string;
}

interface PokemonState extends PokemonCollectionState, PokemonSearchState {
  isPopupVisible: boolean;
  popupData: PopupData;
}

const initialState: PokemonState = {
  collectedPokemon: [],
  isCatching: false,
  catchError: '',
  searchedPokemon: undefined,
  isSearching: false,
  searchError: '',
  isPopupVisible: false,
  popupData: {
    success: false,
  },
};

export const searchPokemon = createAsyncThunk<PokemonData, string>(
  'pokemon/search',
  async query => {
    const data = await getPokemon(query);
    return data;
  },
);

export const catchPokemon = createAsyncThunk<CatchAttemptResult, PokemonData>(
  'pokemon/catch',
  async pokemonData => {
    await new Promise(resolve => setTimeout(resolve, TIMING.CATCH_DELAY_MS));

    const success = Math.random() < 0.5;

    if (success) {
      const newCollectedPokemon = createCollectedPokemon(pokemonData);
      return { success: true, pokemon: newCollectedPokemon };
    } else {
      return {
        success: false,
        error: `${pokemonData.name} ${CATCH_MESSAGES.FAILURE}`,
      };
    }
  },
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearCatchError: state => {
      state.catchError = '';
    },
    clearSearchError: state => {
      state.searchError = '';
    },
    clearAllErrors: state => {
      state.catchError = '';
      state.searchError = '';
    },
    clearSearchResults: state => {
      state.searchedPokemon = undefined;
      state.searchError = '';
    },
    releasePokemon: (state, action) => {
      state.collectedPokemon = state.collectedPokemon.filter(
        p => p.collectionId !== action.payload,
      );
    },
    showPopup: (state, action: PayloadAction<PopupData>) => {
      state.isPopupVisible = true;
      state.popupData = action.payload;
    },
    hidePopup: state => {
      state.isPopupVisible = false;
      state.popupData = { success: false };
    },
    updatePokemonNickname: (
      state,
      action: PayloadAction<{ collectionId: string; nickname: string }>,
    ) => {
      const pokemon = state.collectedPokemon.find(
        p => p.collectionId === action.payload.collectionId,
      );
      if (pokemon) {
        pokemon.nickname = action.payload.nickname;
      }
    },

    togglePokemonFavorite: (state, action: PayloadAction<string>) => {
      const pokemon = state.collectedPokemon.find(
        p => p.collectionId === action.payload,
      );
      if (pokemon) {
        pokemon.isFavorite = !pokemon.isFavorite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchPokemon.pending, state => {
        state.isSearching = true;
        state.searchError = '';
        state.catchError = '';
      })
      .addCase(searchPokemon.fulfilled, (state, action) => {
        state.isSearching = false;
        state.searchedPokemon = action.payload;
        state.searchError = '';
      })
      .addCase(searchPokemon.rejected, (state, action) => {
        state.isSearching = false;
        state.searchedPokemon = undefined;
        state.searchError = handleApiError(action.error);
      })
      .addCase(catchPokemon.pending, state => {
        state.isCatching = true;
        state.catchError = '';
        state.searchError = '';
      })
      .addCase(catchPokemon.fulfilled, (state, action) => {
        state.isCatching = false;
        state.catchError = '';
        if (action.payload.success && action.payload.pokemon) {
          state.collectedPokemon.push(action.payload.pokemon);
        } else if (action.payload.error) {
          state.catchError = action.payload.error;
        }
      })
      .addCase(catchPokemon.rejected, (state, action) => {
        state.isCatching = false;
        state.catchError = action.error.message || 'שגיאה';
      });
  },
  selectors: {
    selectCollectedPokemon: state => state.collectedPokemon,
    selectSearchedPokemon: state => state.searchedPokemon,
    selectIsCatching: state => state.isCatching,
    selectIsSearching: state => state.isSearching,
    selectCatchError: state => state.catchError,
    selectSearchError: state => state.searchError,
    isPokemonCollected: (state, pokemonId: number) =>
      state.collectedPokemon.some(p => p.id === pokemonId),
    getCollectedCount: (state, pokemonId: number) =>
      state.collectedPokemon.filter(p => p.id === pokemonId).length,
    getTotalCollected: state => state.collectedPokemon.length,
    selectPopupVisible: state => state.isPopupVisible,
    selectPopupData: state => state.popupData,
  },
});

export const {
  clearCatchError,
  clearSearchError,
  clearAllErrors,
  clearSearchResults,
  releasePokemon,
  showPopup,
  hidePopup,
  updatePokemonNickname,
  togglePokemonFavorite,
} = pokemonSlice.actions;

export const {
  selectCollectedPokemon,
  selectSearchedPokemon,
  selectIsCatching,
  selectIsSearching,
  selectCatchError,
  selectSearchError,
  isPokemonCollected,
  getCollectedCount,
  getTotalCollected,
  selectPopupVisible,
  selectPopupData,
} = pokemonSlice.selectors;

export default pokemonSlice.reducer;
