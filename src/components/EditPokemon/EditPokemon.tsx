import React, { useState } from 'react';
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
import { useAppDispatch } from '@/src/store/hooks';
import {
  togglePokemonFavorite,
  updatePokemonNickname,
} from '@/src/store/slices/pokemonSlice';
import { CollectedPokemons } from '@/src/types/interfaces/pokemon.types';
import { getDisplayName } from '@/src/utils/pokemonUtils';
import { EDIT_POKEMON_CONFIG } from '@/src/constants/editPokemon';
import { EDIT_POKEMON_STYLES as styles } from './EditPokemon.styles';

interface Props {
  pokemon: CollectedPokemons;
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
  const { maxCharacters, nearLimitThreshold } = EDIT_POKEMON_CONFIG.validation;
  const isNearLimit = characterCount > maxCharacters * nearLimitThreshold;
  const isOverLimit = characterCount > maxCharacters;

  return (
    <Modal isOpen={isOpen} onClose={handleCancel}>
      <ModalBackdrop {...styles.modalBackdrop} />
      <ModalContent {...styles.modalContent}>
        <HStack {...styles.header}>
          <Text {...styles.title}>{EDIT_POKEMON_CONFIG.text.title}</Text>
          <Pressable {...styles.closeButton} onPress={handleCancel}>
            <Text {...styles.closeButtonText}>
              {EDIT_POKEMON_CONFIG.emojis.close}
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
          <Text {...styles.label}>
            {EDIT_POKEMON_CONFIG.text.nicknameLabel}
          </Text>
          <Input {...styles.input}>
            <InputField
              {...styles.inputField}
              value={nickname}
              onChangeText={setNickname}
              placeholder={EDIT_POKEMON_CONFIG.text.nicknamePlaceholder}
              maxLength={maxCharacters}
            />
          </Input>
          {(isNearLimit || isOverLimit) && (
            <Text
              {...styles.characterCount}
              {...(isOverLimit && styles.characterCountLimit)}
            >
              {characterCount}/{maxCharacters}{' '}
              {EDIT_POKEMON_CONFIG.text.characterCountSuffix}
            </Text>
          )}
        </VStack>

        <VStack {...styles.favoriteContainer}>
          <Pressable
            {...styles.favoriteButton}
            {...(isFavorite && styles.favoriteButtonActive)}
            onPress={handleFavoriteToggle}
          >
            <Text {...styles.favoriteIcon}>
              {isFavorite
                ? EDIT_POKEMON_CONFIG.emojis.favoriteActive
                : EDIT_POKEMON_CONFIG.emojis.favoriteInactive}
            </Text>
            <Text {...styles.favoriteButtonText}>
              {isFavorite
                ? EDIT_POKEMON_CONFIG.text.favoriteActive
                : EDIT_POKEMON_CONFIG.text.favoriteInactive}
            </Text>
          </Pressable>
        </VStack>

        <HStack {...styles.buttonsContainer}>
          <Pressable
            {...styles.saveButton}
            {...(isOverLimit && styles.saveButtonDisabled)}
            onPress={handleSave}
            disabled={isOverLimit}
          >
            <Text {...styles.saveButtonText}>
              {EDIT_POKEMON_CONFIG.text.saveButton}
            </Text>
          </Pressable>

          <Pressable {...styles.cancelButton} onPress={handleCancel}>
            <Text {...styles.cancelButtonText}>
              {EDIT_POKEMON_CONFIG.text.cancelButton}
            </Text>
          </Pressable>
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default EditPokemon;
