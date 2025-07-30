import React, { useCallback } from 'react';
import { Text, VStack } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import {
  catchPokemon,
  getCollectedCount,
  selectIsCatching,
  showPopup,
} from '@/src/store/slices/pokemonSlice';
import { PokemonData } from '@/src/types/interfaces/api.types';
import CatchButton from '../CatchButton/CatchButton';
import PokemonTypes from '../PokemonTypes/PokemonTypes';
import CollectionInfo from '../CollectionInfo/CollectionInfo';
import { POKEMON_INFO_STYLES as styles } from './PokemonInfo.styles';

interface Props {
  pokemon: PokemonData;
}

const PokemonInfo: React.FC<Props> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const isCatching = useAppSelector(selectIsCatching);

  const collectedCount = useAppSelector(state =>
    getCollectedCount(state, pokemon.id),
  );

  const pokemonImageUrl =
    pokemon.sprites.other['official-artwork'].front_default;
  const pokemonDisplayName = pokemon.name;
  const pokemonNumber = pokemon.id;

  const handlePokemonCatch = useCallback(async () => {
    const catchAttemptResult = await dispatch(catchPokemon(pokemon));

    if (catchPokemon.fulfilled.match(catchAttemptResult)) {
      dispatch(
        showPopup({
          success: catchAttemptResult.payload.success,
          pokemonName: pokemonDisplayName,
          pokemonImage: pokemonImageUrl,
        }),
      );
    } else {
      dispatch(
        showPopup({
          success: false,
          pokemonName: pokemonDisplayName,
          pokemonImage: pokemonImageUrl,
        }),
      );
    }
  }, [dispatch, pokemon, pokemonDisplayName, pokemonImageUrl]);

  return (
    <VStack {...styles.container}>
      <Image
        source={{ uri: pokemonImageUrl }}
        style={styles.image}
        contentFit="contain"
      />

      <Text {...styles.name}>{pokemonDisplayName}</Text>
      <Text {...styles.id}>#{pokemonNumber}</Text>

      <PokemonTypes types={pokemon.types} styles={styles} />

      <CollectionInfo collectedCount={collectedCount} styles={styles} />

      <CatchButton onCatchResult={handlePokemonCatch} isDisabled={isCatching} />
    </VStack>
  );
};

export default React.memo(PokemonInfo);
