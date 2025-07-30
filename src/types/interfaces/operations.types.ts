import { CollectedPokemons } from './pokemon.types';

export interface CatchAttemptResult {
  success: boolean;
  pokemon?: CollectedPokemons;
  error?: string;
}
