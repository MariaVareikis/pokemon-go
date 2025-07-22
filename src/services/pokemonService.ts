import axios from 'axios';
import { Pokemon } from '../types/pokemonTypes';

export const getPokemon = async (
  query: string,
): Promise<Pokemon | undefined> => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`,
  );

  return data;
};
