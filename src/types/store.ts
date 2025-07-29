import { PokemonData } from "./api";
import { CollectedPokemon } from "./pokemon";

export interface PokemonCollectionState {
  collectedPokemon: CollectedPokemon[];
  isCatching: boolean;
  catchError: string;
}

export interface PokemonSearchState {
  searchedPokemon?: PokemonData;
  isSearching: boolean;
  searchError: string;
}