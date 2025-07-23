import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Spinner } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import {
  catchPokemon,
  pokemonSelectors,
} from '@/src/store/slices/pokemonSlice';
import { CATCH_BUTTON_STYLES as styles } from './CatchButton.styles';
import { CATCH_MESSAGES } from '@/src/constants/catch';
import { Pokemon, CatchResult } from '@/src/types/pokemonTypes';
import pokeballIcon from '@/src/assets/poke-ball.png';

interface CatchButtonProps {
  pokemon: Pokemon;
  onCatchResult?: (result: CatchResult) => void;
  isButtonDisabled?: boolean;
}

const CatchButton: React.FC<CatchButtonProps> = ({
  pokemon,
  onCatchResult,
  isButtonDisabled = false,
}) => {
  const dispatch = useAppDispatch();
  const { caughtPokemon, isCatching } = useAppSelector(state => state.pokemon);

  const isPokemonAlreadyCaught = pokemonSelectors.isPokemonCaught(
    caughtPokemon,
    pokemon.id,
  );
  const isButtonInteractionDisabled =
    isCatching || isButtonDisabled || isPokemonAlreadyCaught;

  const handleCatchButtonPress = async () => {
    const catchAttemptResult = await dispatch(catchPokemon(pokemon));

    if (catchPokemon.fulfilled.match(catchAttemptResult)) {
      onCatchResult?.(catchAttemptResult.payload);
    } else {
      onCatchResult?.({ success: false });
    }
  };

  const getButtonDisplayText = () => {
    if (isPokemonAlreadyCaught) return 'Уже пойман!';
    if (isCatching) return CATCH_MESSAGES.BUTTON_CATCHING;
    return CATCH_MESSAGES.BUTTON_CATCH;
  };

  const renderButtonContent = () => (
    <>
      {isCatching ? (
        <Spinner size="small" color="white" style={styles.spinner} />
      ) : (
        <Image source={pokeballIcon} style={styles.icon} contentFit="contain" />
      )}
      <Text style={styles.text}>{getButtonDisplayText()}</Text>
    </>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleCatchButtonPress}
        disabled={isButtonInteractionDisabled}
        style={[styles.button, isPokemonAlreadyCaught && styles.disabledButton]}
        activeOpacity={0.8}
      >
        {renderButtonContent()}
      </TouchableOpacity>
    </View>
  );
};

export default CatchButton;
