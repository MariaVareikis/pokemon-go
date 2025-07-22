import React from 'react';
import { VStack, Text, Box, HStack } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { Pokemon } from '@/src/types/pokemonTypes';
import { SEARCH_SCREEN_STYLES as styles } from '@/src/styles/SearchScreen.styles';

interface PokemonInfoProps {
  pokemon: Pokemon;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  return (
    <VStack {...styles.pokemonContainer}>
      <Image
        source={{
          uri: pokemon.sprites.other['official-artwork'].front_default,
        }}
        style={styles.pokemonImage}
        contentFit="contain"
      />

      <Text {...styles.pokemonName}>{pokemon.name}</Text>
      <Text {...styles.pokemonId}>#{pokemon.id}</Text>

      <HStack {...styles.typesHStack}>
        {pokemon.types.map((type, index) => (
          <Box key={`${type.type.name}-${index}`} {...styles.typeChip}>
            <Text {...styles.typeText}>{type.type.name}</Text>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

export default PokemonInfo;
