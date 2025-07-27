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

import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import {
  searchPokemon,
  clearSearchResults,
} from '@/src/store/slices/pokemonSlice';
import {
  selectSearchedPokemon,
  selectIsSearching,
  selectSearchError,
} from '@/src/store/selectors/pokemonSelectors';

import { SEARCH_SCREEN_STYLES as styles } from '@/src/styles/SearchScreen.styles';
import { POKEMON_CONTENT } from '@/src/constants/pokemon';
import PokemonInfo from '@/src/components/PokemonInfo/PokemonInfo';

const PokemonSearchScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const pokemon = useAppSelector(selectSearchedPokemon);
  const loading = useAppSelector(selectIsSearching);
  const error = useAppSelector(selectSearchError);

  const [query, setQuery] = useState('');

  const onChangeQuery = (text: string) => {
    setQuery(text);
    if (text.trim() === '') {
      dispatch(clearSearchResults());
    }
  };

  const onSearch = () => {
    const trimmed = query.trim();
    if (trimmed) {
      dispatch(searchPokemon(trimmed));
    }
  };

  return (
    <ScrollView {...styles.container}>
      <VStack {...styles.mainVStack}>
        <Text {...styles.title}>{POKEMON_CONTENT.SEARCH_TITLE}</Text>

        <HStack {...styles.searchHStack}>
          <Button
            {...styles.searchButton}
            isDisabled={loading || !query.trim()}
            onPress={onSearch}
          >
            <ButtonText {...styles.searchButtonText}>
              {POKEMON_CONTENT.SEARCH_BUTTON}
            </ButtonText>
          </Button>
          
          <Input {...styles.input}>
            <InputField
              {...styles.inputField}
              value={query}
              onChangeText={onChangeQuery}
              returnKeyType="search"
              onSubmitEditing={onSearch}
              placeholder={POKEMON_CONTENT.SEARCH_PLACEHOLDER}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Input>
        </HStack>

        {loading && (
          <VStack {...styles.loadingContainer}>
            <Spinner {...styles.spinnerProps} />
            <Text {...styles.loadingText}>{POKEMON_CONTENT.LOADING_TEXT}</Text>
          </VStack>
        )}

        {!loading && error && <Text {...styles.errorText}>{error}</Text>}

        {!loading && !error && pokemon && <PokemonInfo pokemon={pokemon} />}
      </VStack>
    </ScrollView>
  );
};

export default PokemonSearchScreen;
