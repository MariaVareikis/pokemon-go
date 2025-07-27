import React, { useState } from 'react';
import {
  VStack,
  Text,
  Input,
  InputField,
  Button,
  ButtonText,
  Spinner,
  HStack,
  ScrollView,
} from '@gluestack-ui/themed';
import { usePokemonSearch } from '@/src/hooks/usePokemonSearch';
import { SEARCH_SCREEN_STYLES as styles } from '@/src/styles/SearchScreen.styles';
import { POKEMON_CONTENT } from '@/src/constants/pokemon';
import PokemonInfo from '@/src/components/PokemonInfo/PokemonInfo';

const PokemonSearchScreen: React.FC = () => {
  const {
    searchedPokemon,
    isSearching,
    searchError,
    searchForPokemon,
    clearSearchResults,
  } = usePokemonSearch();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (inputText: string) => {
    setSearchTerm(inputText);
    if (inputText.trim() === '') clearSearchResults();
  };

  const handlePokemonSearch = () => searchForPokemon(searchTerm);

  const renderSearchHeader = () => (
    <Text {...styles.title}>{POKEMON_CONTENT.SEARCH_TITLE}</Text>
  );

  const renderSearchInput = () => (
    <HStack {...styles.searchHStack}>
      <Input {...styles.input}>
        <InputField
          {...styles.inputField}
          value={searchTerm}
          onChangeText={handleSearchInputChange}
          returnKeyType="search"
          onSubmitEditing={handlePokemonSearch}
          placeholder={POKEMON_CONTENT.SEARCH_PLACEHOLDER}
        />
      </Input>

      <Button
        {...styles.searchButton}
        isDisabled={isSearching}
        onPress={handlePokemonSearch}
      >
        <ButtonText color="$white" fontWeight="$bold">
          {POKEMON_CONTENT.SEARCH_BUTTON}
        </ButtonText>
      </Button>
    </HStack>
  );

  const renderLoadingState = () => {
    if (!isSearching) return null;

    return (
      <VStack {...styles.loadingContainer}>
        <Spinner {...styles.spinnerProps} />
        <Text {...styles.loadingText}>{POKEMON_CONTENT.LOADING_TEXT}</Text>
      </VStack>
    );
  };

  const renderErrorMessage = () => {
    if (!searchError) return null;

    return <Text {...styles.errorText}>{searchError}</Text>;
  };

  const renderPokemonResult = () => {
    if (isSearching || !searchedPokemon) return null;

    return <PokemonInfo pokemon={searchedPokemon} />;
  };

  return (
    <ScrollView {...styles.container}>
      <VStack {...styles.mainVStack}>
        {renderSearchHeader()}
        {renderSearchInput()}
        {renderLoadingState()}
        {renderErrorMessage()}
        {renderPokemonResult()}
      </VStack>
    </ScrollView>
  );
};

export default PokemonSearchScreen;
