import { PokemonData } from './api.types';
import { CollectedPokemons } from './pokemon.types';

export interface PokemonCollectionState {
  collectedPokemon: CollectedPokemons[];
  isCatching: boolean;
  catchError: string;
}

export interface PokemonSearchState {
  searchedPokemon?: PokemonData;
  isSearching: boolean;
  searchError: string;
}
