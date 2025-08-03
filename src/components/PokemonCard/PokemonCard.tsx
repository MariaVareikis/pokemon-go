import { POKEMON_CARD_CONTENT as content } from '@/src/constants/pokemonCard';
import { useAppDispatch } from '@/src/store/hooks';
import {
  releasePokemon,
  togglePokemonFavorite,
} from '@/src/store/slices/pokemonSlice';
import { CollectedPokemons } from '@/src/types/interfaces/pokemon.types';
import {
  formatCatchDate,
  formatCatchTime,
  getDisplayName,
} from '@/src/utils/pokemonUtils';
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
import { FlatList } from 'react-native';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import EditPokemon from '../EditPokemon/EditPokemon';
import { POKEMON_CARD_STYLES as styles } from './PokemonCard.styles';

interface Props {
  pokemon: CollectedPokemons;
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

  const renderTypeChip = ({ item, index }: { item: string; index: number }) => (
    <Box key={`${item}-${index}`} {...styles.typeChip}>
      <Text {...styles.typeText}>{item}</Text>
    </Box>
  );

  const TypeSeparator = () => <Box {...styles.typeSeparator} />;

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
                <Text {...styles.editIcon}>{content.ICONS.EDIT}</Text>
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

        <VStack {...styles.typesContainer}>
          <FlatList
            data={pokemon.types}
            renderItem={renderTypeChip}
            keyExtractor={(item, index) => `${item}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={TypeSeparator}
            contentContainerStyle={styles.typesList}
          />
        </VStack>

        <VStack {...styles.dateTimeContainer}>
          <HStack {...styles.dateContainer}>
            <Text {...styles.dateText}>
              {formatCatchDate(pokemon.collectedAt)}
            </Text>
            <Text {...styles.dateLabel}>{content.CATCH_DATE_LABEL}</Text>
          </HStack>

          <HStack {...styles.timeContainer}>
            <Text {...styles.timeText}>
              {formatCatchTime(pokemon.collectedAt)}
            </Text>
            <Text {...styles.timeLabel}>{content.CATCH_TIME_LABEL}</Text>
          </HStack>
        </VStack>

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
