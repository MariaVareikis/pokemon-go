export interface PokemonSprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  height?: number;
  weight?: number;
  base_experience?: number;
}

export interface CaughtPokemon {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
  caughtAt: string;
  catchId: string;
}

export interface PokemonSearchState {
  searchedPokemon?: Pokemon;
  isSearching: boolean;
  searchError: string;
}

export interface CatchResult {
  success: boolean;
  pokemon?: CaughtPokemon;
  error?: string;
}

export interface PokemonState {
  caughtPokemon: CaughtPokemon[];
  isLoading: boolean;
  isCatching: boolean;
  error: string;
}

export enum PokemonTypeEnum {
  NORMAL = 'normal',
  FIRE = 'fire',
  WATER = 'water',
  ELECTRIC = 'electric',
  GRASS = 'grass',
  ICE = 'ice',
  FIGHTING = 'fighting',
  POISON = 'poison',
  GROUND = 'ground',
  FLYING = 'flying',
  PSYCHIC = 'psychic',
  BUG = 'bug',
  ROCK = 'rock',
  GHOST = 'ghost',
  DRAGON = 'dragon',
  DARK = 'dark',
  STEEL = 'steel',
  FAIRY = 'fairy',
}
