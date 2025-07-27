import { CaughtPokemon, Pokemon } from '@/src/types/pokemonTypes';

export const createCaughtPokemon = (pokemon: Pokemon): CaughtPokemon => ({
  id: pokemon.id,
  name: pokemon.name,
  imageUrl: pokemon.sprites.other['official-artwork'].front_default,
  types: pokemon.types.map(t => t.type.name),
  caughtAt: new Date().toISOString(),
  catchId: `${pokemon.id}-${Date.now()}`,
});