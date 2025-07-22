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
    executeSearch,
    resetSearchResults,
  } = usePokemonSearch();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
    if (text.trim() === '') resetSearchResults();
  };

  const handleSearch = () => executeSearch(searchTerm);

  return (
    <ScrollView {...styles.container}>
      <VStack {...styles.mainVStack}>
        <Text {...styles.title}>{POKEMON_CONTENT.SEARCH_TITLE}</Text>

        <HStack {...styles.searchHStack}>
          <Input {...styles.input}>
            <InputField
              {...styles.inputField}
              value={searchTerm}
              onChangeText={handleSearchChange}
              returnKeyType="search"
              onSubmitEditing={handleSearch}
              placeholder={POKEMON_CONTENT.SEARCH_PLACEHOLDER}
            />
          </Input>

          <Button
            {...styles.searchButton}
            isDisabled={isSearching}
            onPress={handleSearch}
          >
            <ButtonText color="$white" fontWeight="$bold">
              {POKEMON_CONTENT.SEARCH_BUTTON}
            </ButtonText>
          </Button>
        </HStack>

        {isSearching && (
          <VStack {...styles.loadingContainer}>
            <Spinner {...styles.spinnerProps} />
            <Text {...styles.loadingText}>{POKEMON_CONTENT.LOADING_TEXT}</Text>
          </VStack>
        )}

        {searchError && <Text {...styles.errorText}>{searchError}</Text>}

        {!isSearching && searchedPokemon && (
          <PokemonInfo pokemon={searchedPokemon} />
        )}
      </VStack>
    </ScrollView>
  );
};

export default PokemonSearchScreen;
