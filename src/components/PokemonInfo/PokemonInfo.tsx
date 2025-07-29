import pokeballIcon from '@/src/assets/poke-ball.png';
import { CATCH_MESSAGES } from '@/src/constants/catch';
import { POKEMON_INFO_CONTENT } from '@/src/constants/pokemonInfo';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import {
  catchPokemon,
  getCollectedCount,
  selectIsCatching,
  showPopup,
} from '@/src/store/slices/pokemonSlice';
import {
  Box,
  HStack,
  Pressable,
  Spinner,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import React from 'react';
import { CATCH_BUTTON_STYLES as buttonStyles } from '../CatchButton/CatchButton.styles';
import { POKEMON_INFO_STYLES as styles } from './PokemonInfo.styles';
import { PokemonData } from '@/src/types/api';

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

  const renderCollectionInfo = () => (
    <VStack {...styles.collectionInfoContainer}>
      <HStack {...styles.collectionInfoRow}>
        <Text {...styles.collectionIcon}>
          {POKEMON_INFO_CONTENT.EMOJIS.BAG}
        </Text>
        <Text {...styles.collectionMainText}>
          {POKEMON_INFO_CONTENT.COLLECTION_INFO.HAS_POKEMON} {collectedCount}
        </Text>
      </HStack>

      {collectedCount > 0 && (
        <Text {...styles.collectionSubText}>
          {collectedCount === 1
            ? POKEMON_INFO_CONTENT.COLLECTION_INFO.ONE_POKEMON
            : `${collectedCount} ${POKEMON_INFO_CONTENT.COLLECTION_INFO.MULTIPLE_POKEMON}`}
        </Text>
      )}
    </VStack>
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

      {renderCollectionInfo()}

      {renderCatchButton()}
    </VStack>
  );
};

export default PokemonInfo;
