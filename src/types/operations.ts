import { CollectedPokemon } from "./pokemon";

export interface CatchAttemptResult {
  success: boolean;
  pokemon?: CollectedPokemon;
  error?: string;
}