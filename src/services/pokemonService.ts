import axios from 'axios';
import { PokemonData } from '../types/api';

export const getPokemon = async (query: string): Promise<PokemonData> => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`,
  );
  return data;
};
