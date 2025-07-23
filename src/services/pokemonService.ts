import axios from 'axios';
import { Pokemon } from '@/src/types/pokemonTypes';

export const getPokemon = async (query: string): Promise<Pokemon> => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`,
  );
  return data;
};
