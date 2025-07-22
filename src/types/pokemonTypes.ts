export interface Pokemon {
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
    type: { name: string };
  }>;
}

export interface PokemonSearchState {
  searchedPokemon?: Pokemon;
  isSearching: boolean;
  searchError: string;
}

