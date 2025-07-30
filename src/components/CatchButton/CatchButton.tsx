import pokeballIcon from '@/src/assets/poke-ball.png';
import { CATCH_MESSAGES } from '@/src/constants/catch';
import { useAppSelector } from '@/src/store/hooks';
import { selectIsCatching } from '@/src/store/slices/pokemonSlice';
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
} from '@gluestack-ui/themed';
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

  return (
    <Button
      onPress={onCatchResult}
      isDisabled={isDisabled || isCatching}
      {...styles.container}
      {...(isCatching && styles.containerLoading)}
      {...(isDisabled && styles.containerDisabled)}
    >
      {isCatching ? (
        <>
          <ButtonSpinner {...styles.spinner} />
          <ButtonText {...styles.text}>
            {CATCH_MESSAGES.BUTTON_CATCHING}
          </ButtonText>
        </>
      ) : (
        <>
          <Image
            source={pokeballIcon}
            style={styles.icon}
            contentFit="contain"
          />
          <ButtonText {...styles.text}>
            {CATCH_MESSAGES.BUTTON_CATCH}
          </ButtonText>
        </>
      )}
    </Button>
  );
};

export default CatchButton;
