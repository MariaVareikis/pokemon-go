import { EDIT_POKEMON_CONTENT } from '@/src/constants/editPokemon';
import { useAppDispatch } from '@/src/store/hooks';
import {
  togglePokemonFavorite,
  updatePokemonNickname,
} from '@/src/store/slices/pokemonSlice';
import { CollectedPokemon } from '@/src/types/pokemon';
import { getDisplayName } from '@/src/utils/pokemonUtils';
import {
  HStack,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalContent,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { EDIT_POKEMON_STYLES as styles } from './EditPokemon.styles';

interface Props {
  pokemon: CollectedPokemon;
  isOpen: boolean;
  onClose: () => void;
}

const EditPokemon: React.FC<Props> = ({ pokemon, isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const [nickname, setNickname] = useState(getDisplayName(pokemon));
  const [isFavorite, setIsFavorite] = useState(pokemon.isFavorite);

  const handleSave = () => {
    if (nickname.trim() !== getDisplayName(pokemon)) {
      dispatch(
        updatePokemonNickname({
          collectionId: pokemon.collectionId,
          nickname: nickname.trim(),
        }),
      );
    }

    if (isFavorite !== pokemon.isFavorite) {
      dispatch(togglePokemonFavorite(pokemon.collectionId));
    }

    onClose();
  };

  const handleCancel = () => {
    setNickname(getDisplayName(pokemon));
    setIsFavorite(pokemon.isFavorite);
    onClose();
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const characterCount = nickname.length;
  const maxCharacters = EDIT_POKEMON_CONTENT.VALIDATION.MAX_CHARACTERS;
  const isNearLimit =
    characterCount >
    maxCharacters * EDIT_POKEMON_CONTENT.VALIDATION.NEAR_LIMIT_THRESHOLD;
  const isOverLimit = characterCount > maxCharacters;

  const favoriteButtonStyle = isFavorite
    ? { ...styles.favoriteButton, ...styles.favoriteButtonActive }
    : styles.favoriteButton;

  const characterCountStyle = isOverLimit
    ? { ...styles.characterCount, ...styles.characterCountLimit }
    : styles.characterCount;

  const saveButtonStyle = isOverLimit
    ? { ...styles.saveButton, ...styles.saveButtonDisabled }
    : styles.saveButton;

  return (
    <Modal isOpen={isOpen} onClose={handleCancel}>
      <ModalBackdrop {...styles.modalBackdrop} />
      <ModalContent {...styles.modalContent}>
        <HStack {...styles.header}>
          <Text {...styles.title}>{EDIT_POKEMON_CONTENT.TITLE}</Text>
          <Pressable {...styles.closeButton} onPress={handleCancel}>
            <Text {...styles.closeButtonText}>
              {EDIT_POKEMON_CONTENT.EMOJIS.CLOSE}
            </Text>
          </Pressable>
        </HStack>

        <VStack {...styles.pokemonInfo}>
          <Image
            source={{ uri: pokemon.imageUrl }}
            style={styles.pokemonImage}
            contentFit="contain"
          />
          <Text {...styles.pokemonName}>
            {pokemon.name} #{pokemon.id}
          </Text>
        </VStack>

        <VStack {...styles.inputContainer}>
          <Text {...styles.label}>{EDIT_POKEMON_CONTENT.NICKNAME_LABEL}</Text>
          <Input {...styles.input}>
            <InputField
              {...styles.inputField}
              value={nickname}
              onChangeText={setNickname}
              placeholder={EDIT_POKEMON_CONTENT.NICKNAME_PLACEHOLDER}
              maxLength={maxCharacters}
            />
          </Input>
          {(isNearLimit || isOverLimit) && (
            <Text {...characterCountStyle}>
              {characterCount}/{maxCharacters}{' '}
              {EDIT_POKEMON_CONTENT.CHARACTER_COUNT_SUFFIX}
            </Text>
          )}
        </VStack>

        <VStack {...styles.favoriteContainer}>
          <Pressable {...favoriteButtonStyle} onPress={handleFavoriteToggle}>
            <Text {...styles.favoriteIcon}>
              {isFavorite
                ? EDIT_POKEMON_CONTENT.EMOJIS.FAVORITE_ACTIVE
                : EDIT_POKEMON_CONTENT.EMOJIS.FAVORITE_INACTIVE}
            </Text>
            <Text {...styles.favoriteButtonText}>
              {isFavorite
                ? EDIT_POKEMON_CONTENT.FAVORITE_ACTIVE
                : EDIT_POKEMON_CONTENT.FAVORITE_INACTIVE}
            </Text>
          </Pressable>
        </VStack>

        <HStack {...styles.buttonsContainer}>
          <Pressable
            {...saveButtonStyle}
            onPress={handleSave}
            disabled={isOverLimit}
          >
            <Text {...styles.saveButtonText}>
              {EDIT_POKEMON_CONTENT.SAVE_BUTTON}
            </Text>
          </Pressable>

          <Pressable {...styles.cancelButton} onPress={handleCancel}>
            <Text {...styles.cancelButtonText}>
              {EDIT_POKEMON_CONTENT.CANCEL_BUTTON}
            </Text>
          </Pressable>
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default EditPokemon;
