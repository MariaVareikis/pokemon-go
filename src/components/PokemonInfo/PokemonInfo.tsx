import React from 'react';
import {
  VStack,
  Text,
  Box,
  HStack,
  Spinner,
  Pressable,
} from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { PokemonData } from '@/src/types/pokemonTypes';
import { POKEMON_INFO_STYLES as styles } from './PokemonInfo.styles';
import { CATCH_BUTTON_STYLES as buttonStyles } from '../CatchButton/CatchButton.styles';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { catchPokemon, showPopup } from '@/src/store/slices/pokemonSlice';
import { CATCH_MESSAGES } from '@/src/constants/catch';
import pokeballIcon from '@/src/assets/poke-ball.png';

interface PokemonInfo {
  pokemon: PokemonData;
}

const PokemonInfo: React.FC<PokemonInfo> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const { isCatching } = useAppSelector(state => state.pokemon);

  const pokemonImageUrl =
    pokemon.sprites.other['official-artwork'].front_default;
  const pokemonDisplayName = pokemon.name;
  const pokemonNumber = pokemon.id;

  const handlePokemonCatch = async () => {
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
  };

  const renderPokemonTypes = () => (
    <HStack {...styles.typesContainer}>
      {pokemon.types.map((pokemonType, typeIndex) => (
        <Box key={`${pokemonType.type.name}-${typeIndex}`} {...styles.typeChip}>
          <Text {...styles.typeText}>{pokemonType.type.name}</Text>
        </Box>
      ))}
    </HStack>
  );

  const renderCatchButton = () => (
    <Pressable
      onPress={handlePokemonCatch}
      disabled={isCatching}
      {...buttonStyles.container}
    >
      <HStack {...buttonStyles.content}>
        {isCatching ? (
          <Spinner {...buttonStyles.spinner} />
        ) : (
          <Image
            source={pokeballIcon}
            style={buttonStyles.icon}
            contentFit="contain"
          />
        )}
        <Text {...buttonStyles.text}>
          {isCatching
            ? CATCH_MESSAGES.BUTTON_CATCHING
            : CATCH_MESSAGES.BUTTON_CATCH}
        </Text>
      </HStack>
    </Pressable>
  );

  return (
    <VStack {...styles.container}>
      <Image
        source={{ uri: pokemonImageUrl }}
        style={styles.image}
        contentFit="contain"
      />

      <Text {...styles.name}>{pokemonDisplayName}</Text>
      <Text {...styles.id}>#{pokemonNumber}</Text>

      {renderPokemonTypes()}
      {renderCatchButton()}
    </VStack>
  );
};

export default PokemonInfo;
