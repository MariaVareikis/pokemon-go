import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  Pokemon,
  CaughtPokemon,
  CatchResult,
  PokemonState,
} from '@/src/types/pokemonTypes';
import { TIMING } from '@/src/constants/storage';

const createCaughtPokemon = (pokemon: Pokemon): CaughtPokemon => ({
  id: pokemon.id,
  name: pokemon.name,
  imageUrl: pokemon.sprites.other['official-artwork'].front_default,
  types: pokemon.types.map(t => t.type.name),
  caughtAt: new Date().toISOString(),
  catchId: `${pokemon.id}-${Date.now()}`,
});

const initialState: PokemonState = {
  caughtPokemon: [],
  isLoading: false,
  isCatching: false,
  error: '',
};

export const catchPokemon = createAsyncThunk<
  CatchResult,
  Pokemon,
  { state: { pokemon: PokemonState } }
>('pokemon/catch', async (pokemon, { getState }) => {
  const { caughtPokemon } = getState().pokemon;

  if (caughtPokemon.some(p => p.id === pokemon.id)) {
    return { success: false, error: `${pokemon.name}כבר נתפס!` };
  }

  await new Promise(resolve => setTimeout(resolve, TIMING.CATCH_DELAY_MS));

  const newPokemon = createCaughtPokemon(pokemon);
  return { success: true, pokemon: newPokemon };
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearError: state => {
      state.error = '';
    },
    releasePokemon: (state, action) => {
      state.caughtPokemon = state.caughtPokemon.filter(
        p => p.catchId !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(catchPokemon.pending, state => {
        state.isCatching = true;
        state.error = '';
      })
      .addCase(catchPokemon.fulfilled, (state, action) => {
        state.isCatching = false;
        if (action.payload.success && action.payload.pokemon) {
          state.caughtPokemon.push(action.payload.pokemon);
        }
      })
      .addCase(catchPokemon.rejected, (state, action) => {
        state.isCatching = false;
        state.error = action.error.message || 'Ошибка';
      });
  },
});

export const { clearError, releasePokemon } = pokemonSlice.actions;

export const pokemonSelectors = {
  isPokemonCaught: (caughtList: CaughtPokemon[], pokemonId: number) =>
    caughtList.some(p => p.id === pokemonId),

  getCaughtCount: (caughtList: CaughtPokemon[], pokemonId: number) =>
    caughtList.filter(p => p.id === pokemonId).length,

  getTotalCount: (caughtList: CaughtPokemon[]) => caughtList.length,
};

export default pokemonSlice.reducer;
