import React, { useEffect } from 'react';
import { VStack, Text, Box, Pressable, HStack } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import {
  hidePopup,
  selectPopupVisible,
  selectPopupData,
} from '@/src/store/slices/pokemonSlice';
import {
  CATCH_MESSAGES,
  CATCH_STYLES,
  POPUP_AUTO_CLOSE_DELAY,
} from '@/src/constants/catch';
import { CATCH_POPUP_STYLES as styles } from './CatchPopup.styles';

const POPUP_CONFIG = {
  success: {
    emoji: CATCH_STYLES.SUCCESS_EMOJI,
    message: CATCH_MESSAGES.SUCCESS,
    color: CATCH_STYLES.SUCCESS_COLOR,
  },
  failure: {
    emoji: CATCH_STYLES.FAILURE_EMOJI,
    message: CATCH_MESSAGES.FAILURE,
    color: CATCH_STYLES.FAILURE_COLOR,
  },
} as const;

const GlobalCatchPopup: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectPopupVisible);
  const popupData = useAppSelector(selectPopupData);

  const handleClose = () => {
    dispatch(hidePopup());
  };

  useEffect(() => {
    if (isVisible) {
      const autoCloseTimer = setTimeout(handleClose, POPUP_AUTO_CLOSE_DELAY);
      return () => clearTimeout(autoCloseTimer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const config = POPUP_CONFIG[popupData.success ? 'success' : 'failure'];

  return (
    <Box {...styles.modalOverlay}>
      <Box {...styles.blurLayer1} />
      <Box {...styles.blurLayer2} />
      <Box {...styles.blurLayer3} />

      <Pressable {...styles.blurPressable} onPress={handleClose}>
        <Pressable {...styles.contentContainer} onPress={() => {}}>
          <Pressable {...styles.closeButton} onPress={handleClose}>
            <Text {...styles.closeButtonText}>✕</Text>
          </Pressable>

          <HStack {...styles.headerContainer}>
            <Text {...styles.celebrationIcon}>{config.emoji}</Text>
            <VStack {...styles.messageContainer}>
              <Text {...styles.messageText}>{config.message}</Text>
              {popupData.pokemonName && (
                <Text {...styles.pokemonNameText}>{popupData.pokemonName}</Text>
              )}
            </VStack>
          </HStack>

          {popupData.pokemonImage && (
            <Image
              source={{ uri: popupData.pokemonImage }}
              style={styles.pokemonImage}
              contentFit="contain"
            />
          )}

          <Box {...styles.statusBar} bg={config.color} />
        </Pressable>
      </Pressable>
    </Box>
  );
};

export default GlobalCatchPopup;
