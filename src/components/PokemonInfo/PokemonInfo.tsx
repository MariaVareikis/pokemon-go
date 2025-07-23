import React, { useState } from 'react';
import { VStack, Text, Box, HStack, Spinner } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';
import { Pokemon } from '@/src/types/pokemonTypes';
import { SEARCH_SCREEN_STYLES as styles } from '@/src/styles/SearchScreen.styles';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import {
  catchPokemon,
  pokemonSelectors,
} from '@/src/store/slices/pokemonSlice';
import { CATCH_MESSAGES } from '@/src/constants/catch';
import CatchPopup from '@/src/components/CatchPopup/CatchPopup';
import pokeballIcon from '@/src/assets/poke-ball.png';
import { SPINNER_CONFIG } from './PokemonInfo.styles';

interface PokemonInfoProps {
  pokemon: Pokemon;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const { caughtPokemon, isCatching } = useAppSelector(state => state.pokemon);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [pokemonCatchResult, setPokemonCatchResult] = useState({
    success: false,
  });

  const isPokemonAlreadyCaught = pokemonSelectors.isPokemonCaught(
    caughtPokemon,
    pokemon.id,
  );
  const pokemonImageUrl =
    pokemon.sprites.other['official-artwork'].front_default;
  const pokemonDisplayName = pokemon.name;
  const pokemonNumber = pokemon.id;

  const handlePokemonCatch = async () => {
    const catchAttemptResult = await dispatch(catchPokemon(pokemon));

    if (catchPokemon.fulfilled.match(catchAttemptResult)) {
      setPokemonCatchResult(catchAttemptResult.payload);
    } else {
      setPokemonCatchResult({ success: false });
    }

    setIsPopupVisible(true);
  };

  const closeCatchPopup = () => setIsPopupVisible(false);

  const renderPokemonTypes = () => (
    <HStack {...styles.typesHStack}>
      {pokemon.types.map((pokemonType, typeIndex) => (
        <Box key={`${pokemonType.type.name}-${typeIndex}`} {...styles.typeChip}>
          <Text {...styles.typeText}>{pokemonType.type.name}</Text>
        </Box>
      ))}
    </HStack>
  );

  const renderCatchButton = () => (
    <TouchableOpacity
      onPress={handlePokemonCatch}
      disabled={isCatching || isPokemonAlreadyCaught}
      style={styles.catchButtonStyle}
      activeOpacity={0.8}
    >
      {isCatching ? (
        <Spinner {...SPINNER_CONFIG} />
      ) : (
        <Image
          source={pokeballIcon}
          style={styles.catchButtonIcon}
          contentFit="contain"
        />
      )}
      <Text style={styles.catchButtonText}>
        {isPokemonAlreadyCaught
          ? 'Already caught!'
          : isCatching
            ? CATCH_MESSAGES.BUTTON_CATCHING
            : CATCH_MESSAGES.BUTTON_CATCH}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <VStack {...styles.pokemonContainer}>
        <Image
          source={{ uri: pokemonImageUrl }}
          style={styles.pokemonImage}
          contentFit="contain"
        />

        <Text {...styles.pokemonName}>{pokemonDisplayName}</Text>
        <Text {...styles.pokemonId}>#{pokemonNumber}</Text>

        {renderPokemonTypes()}
        {renderCatchButton()}
      </VStack>

      <CatchPopup
        isVisible={isPopupVisible}
        success={pokemonCatchResult.success}
        pokemonName={pokemonDisplayName}
        onClose={closeCatchPopup}
      />
    </>
  );
};

export default PokemonInfo;
