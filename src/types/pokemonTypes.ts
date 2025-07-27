export interface PokemonData {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

export interface CollectedPokemon {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
  collectedAt: string;
  collectionId: string;
}

export interface CatchAttemptResult {
  success: boolean;
  pokemon?: CollectedPokemon;
  error?: string;
}

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
