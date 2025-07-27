import { CollectedPokemon, PokemonData } from '@/src/types/pokemonTypes';

export const createCollectedPokemon = (pokemonData: PokemonData): CollectedPokemon => ({
  id: pokemonData.id,
  name: pokemonData.name,
  imageUrl: pokemonData.sprites.other['official-artwork'].front_default,
  types: pokemonData.types.map(t => t.type.name),
  collectedAt: new Date().toISOString(),
  collectionId: `${pokemonData.id}-${Date.now()}`,
});