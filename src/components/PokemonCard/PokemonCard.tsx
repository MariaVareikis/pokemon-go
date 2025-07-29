import { POKEMON_CARD_CONTENT as content } from '@/src/constants/pokemonCard';
import { useAppDispatch } from '@/src/store/hooks';
import {
  releasePokemon,
  togglePokemonFavorite,
} from '@/src/store/slices/pokemonSlice';
import { CollectedPokemon } from '@/src/types/pokemon';
import { formatCatchDate, getDisplayName } from '@/src/utils/pokemonUtils';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Box,
  Button,
  ButtonText,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { POKEMON_CARD_STYLES as styles } from './PokemonCard.styles';
import EditPokemon from '../EditPokemon/EditPokemon';

interface Props {
  pokemon: CollectedPokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleEditPress = () => {
    setShowEditForm(true);
  };

  const handleEditClose = () => {
    setShowEditForm(false);
  };

  const handleFavoriteToggle = () => {
    dispatch(togglePokemonFavorite(pokemon.collectionId));
  };

  const handleDeletePress = () => {
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(releasePokemon(pokemon.collectionId));
    setShowDeleteDialog(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
  };

  const containerStyle = pokemon.isFavorite
    ? { ...styles.container, ...styles.containerFavorite }
    : styles.container;

  return (
    <>
      <VStack {...containerStyle}>
        <HStack {...styles.topSection}>
          <VStack {...styles.nameSection}>
            <HStack {...styles.nameContainer}>
              <Text {...styles.pokemonName}>{getDisplayName(pokemon)}</Text>
              <Pressable {...styles.editButton} onPress={handleEditPress}>
                <Text {...styles.editIcon}>✏️</Text>
              </Pressable>
            </HStack>

            {pokemon.nickname && pokemon.nickname !== pokemon.name && (
              <Text {...styles.realName}>({pokemon.name})</Text>
            )}

            <Text {...styles.pokemonId}>#{pokemon.id}</Text>
          </VStack>

          <VStack {...styles.favoriteSection}>
            <Pressable
              {...styles.favoriteButton}
              onPress={handleFavoriteToggle}
            >
              <Text {...styles.favoriteIcon}>
                {pokemon.isFavorite
                  ? content.ICONS.FAVORITE
                  : content.ICONS.NOT_FAVORITE}
              </Text>
            </Pressable>
          </VStack>
        </HStack>

        <VStack {...styles.imageSection}>
          <Image
            source={{ uri: pokemon.imageUrl }}
            style={styles.pokemonImage}
            contentFit="contain"
          />
        </VStack>

        <HStack {...styles.typesContainer}>
          {pokemon.types.map((type, index) => (
            <Box key={`${type}-${index}`} {...styles.typeChip}>
              <Text {...styles.typeText}>{type}</Text>
            </Box>
          ))}
        </HStack>

        <HStack {...styles.dateContainer}>
          <Text {...styles.dateText}>
            {formatCatchDate(pokemon.collectedAt)}
          </Text>
          <Text {...styles.dateLabel}>{content.CATCH_DATE_LABEL}</Text>
        </HStack>

        <HStack {...styles.bottomSection}>
          <Pressable {...styles.deleteButton} onPress={handleDeletePress}>
            <Text {...styles.deleteButtonText}>{content.RELEASE_BUTTON}</Text>
            <Text {...styles.deleteIcon}>{content.ICONS.DELETE}</Text>
          </Pressable>
        </HStack>
      </VStack>

      <EditPokemon
        pokemon={pokemon}
        isOpen={showEditForm}
        onClose={handleEditClose}
      />

      <AlertDialog isOpen={showDeleteDialog} onClose={handleDeleteCancel}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Text {...styles.dialogTitle}>{content.DELETE_DIALOG.TITLE}</Text>
            <AlertDialogCloseButton onPress={handleDeleteCancel}>
              <Text fontSize={20}>{content.ICONS.CLOSE}</Text>
            </AlertDialogCloseButton>
          </AlertDialogHeader>

          <AlertDialogBody>
            <Text {...styles.dialogMessage}>
              {content.DELETE_DIALOG.MESSAGE} {getDisplayName(pokemon)}?
            </Text>
            <Text {...styles.dialogWarning}>
              {content.DELETE_DIALOG.WARNING}
            </Text>
          </AlertDialogBody>

          <AlertDialogFooter>
            <HStack {...styles.dialogFooter}>
              <Button {...styles.cancelButton} onPress={handleDeleteCancel}>
                <ButtonText>{content.DELETE_DIALOG.CANCEL}</ButtonText>
              </Button>

              <Button {...styles.confirmButton} onPress={handleDeleteConfirm}>
                <ButtonText {...styles.confirmButtonText}>
                  {content.DELETE_DIALOG.CONFIRM}
                </ButtonText>
              </Button>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PokemonCard;
