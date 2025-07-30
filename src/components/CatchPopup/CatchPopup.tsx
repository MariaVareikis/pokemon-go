import React, { useEffect } from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  VStack,
  Text,
  Box,
  HStack,
  Icon,
  CloseIcon,
} from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import {
  hidePopup,
  selectPopupData,
  selectPopupVisible,
} from '@/src/store/slices/pokemonSlice';
import { POPUP_AUTO_CLOSE_DELAY } from '@/src/constants/catch';
import { POPUP_CONFIG } from '@/src/constants/catchPopup';
import { CATCH_POPUP_STYLES as styles } from './CatchPopup.styles';

const CatchPopup: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectPopupVisible);
  const popupData = useAppSelector(selectPopupData);

  const handleClose = () => {
    dispatch(hidePopup());
  };

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(handleClose, POPUP_AUTO_CLOSE_DELAY);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const config = POPUP_CONFIG[popupData.success ? 'success' : 'failure'];

  return (
    <Modal isOpen={isVisible} onClose={handleClose} {...styles.modal}>
      <ModalBackdrop />
      <ModalContent {...styles.modalContent}>
        <ModalCloseButton {...styles.modalCloseButton}>
          <Icon as={CloseIcon} />
        </ModalCloseButton>

        <ModalBody {...styles.modalBody}>
          <VStack {...styles.mainContainer}>
            <Text {...styles.celebrationIcon}>{config.emoji}</Text>

            <VStack {...styles.messageContainer}>
              <Text {...styles.messageText}>{config.message}</Text>
              {popupData.pokemonName && (
                <Text {...styles.pokemonNameText}>
                  {popupData.pokemonName}
                </Text>
              )}
            </VStack>

            {popupData.pokemonImage && (
              <Image
                source={{ uri: popupData.pokemonImage }}
                style={styles.pokemonImage}
                contentFit="contain"
              />
            )}

            <Box {...styles.statusBar} bg={config.color} />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CatchPopup;
