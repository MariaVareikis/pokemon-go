import axios from 'axios';
import { PokemonData } from '../types/interfaces/api.types';

export const getPokemon = async (query: string): Promise<PokemonData> => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${query}`,
  );

  return data;
};
