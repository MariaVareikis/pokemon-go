import React from 'react';
import { Box, HStack, Text } from '@gluestack-ui/themed';

interface PokemonType {
  type: {
    name: string;
  };
}

interface Props {
  types: PokemonType[];
  styles: any;
}

const PokemonTypes: React.FC<Props> = ({ types, styles }) => (
  <HStack {...styles.typesContainer}>
    {types.map((pokemonType, typeIndex) => (
      <Box key={`${pokemonType.type.name}-${typeIndex}`} {...styles.typeChip}>
        <Text {...styles.typeText}>{pokemonType.type.name}</Text>
      </Box>
    ))}
  </HStack>
);

export default React.memo(PokemonTypes);
