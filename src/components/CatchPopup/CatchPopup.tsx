import React, { useEffect } from 'react';
import { VStack, Text, Box } from '@gluestack-ui/themed';
import { CATCH_MESSAGES, CATCH_STYLES, POPUP_AUTO_CLOSE_DELAY } from '@/src/constants/catch';
import { CATCH_POPUP_STYLES } from './CatchPopup.styles';

interface CatchPopupProps {
  isVisible: boolean;
  success: boolean;
  pokemonName?: string;
  onClose: () => void;
}

const CatchPopup: React.FC<CatchPopupProps> = ({
  isVisible,
  success,
  pokemonName,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const autoCloseTimer = setTimeout(() => {
        onClose();
      }, POPUP_AUTO_CLOSE_DELAY);

      return () => clearTimeout(autoCloseTimer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const isSuccessfulCatch = success;
  const popupTypeStyles = isSuccessfulCatch
    ? CATCH_POPUP_STYLES.successPopup
    : CATCH_POPUP_STYLES.failurePopup;

  const displayEmoji = isSuccessfulCatch
    ? CATCH_STYLES.SUCCESS_EMOJI
    : CATCH_STYLES.FAILURE_EMOJI;

  const displayMessage = isSuccessfulCatch
    ? CATCH_MESSAGES.SUCCESS
    : CATCH_MESSAGES.FAILURE;

  return (
    <Box {...CATCH_POPUP_STYLES.overlay}>
      <Box {...CATCH_POPUP_STYLES.popup} {...popupTypeStyles}>
        <VStack {...CATCH_POPUP_STYLES.iconContainer}>
          <Text {...CATCH_POPUP_STYLES.emoji}>{displayEmoji}</Text>

          <Text {...CATCH_POPUP_STYLES.messageText}>{displayMessage}</Text>

          {pokemonName && (
            <Text {...CATCH_POPUP_STYLES.pokemonNameText}>{pokemonName}</Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default CatchPopup;
