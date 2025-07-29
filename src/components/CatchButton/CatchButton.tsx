import pokeballIcon from '@/src/assets/poke-ball.png';
import { CATCH_MESSAGES } from '@/src/constants/catch';
import { useAppSelector } from '@/src/store/hooks';
import { selectIsCatching } from '@/src/store/slices/pokemonSlice';
import { HStack, Pressable, Spinner, Text } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import React from 'react';
import { CATCH_BUTTON_STYLES as styles } from './CatchButton.styles';

interface Props {
  onCatchResult: () => void;
  isDisabled?: boolean;
}

const CatchButton: React.FC<Props> = ({
  onCatchResult,
  isDisabled = false,
}) => {
  const isCatching = useAppSelector(selectIsCatching);
  const isButtonDisabled = isCatching || isDisabled;

  return (
    <Pressable
      onPress={onCatchResult}
      disabled={isButtonDisabled}
      {...styles.container}
      {...(isCatching && styles.containerLoading)}
      {...(isDisabled && styles.containerDisabled)}
    >
      <HStack {...styles.content}>
        {isCatching ? (
          <Spinner />
        ) : (
          <Image
            source={pokeballIcon}
            style={styles.icon}
            contentFit="contain"
          />
        )}
        <Text {...styles.text}>
          {isCatching
            ? CATCH_MESSAGES.BUTTON_CATCHING
            : CATCH_MESSAGES.BUTTON_CATCH}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default CatchButton;
