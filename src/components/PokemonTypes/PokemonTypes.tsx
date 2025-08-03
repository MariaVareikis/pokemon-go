import React from 'react';
import { FlatList } from 'react-native';
import { Box, Text, HStack } from '@gluestack-ui/themed';
import { POKEMON_INFO_STYLES } from '../PokemonInfo/PokemonInfo.styles';

interface PokemonType {
  type: {
    name: string;
  };
}

interface Props {
  types: PokemonType[];
  styles: typeof POKEMON_INFO_STYLES;
}

const PokemonTypes: React.FC<Props> = ({ types, styles }) => {
  const renderTypeChip = ({ item }: { item: PokemonType }) => (
    <Box {...styles.typeChip}>
      <Text {...styles.typeText}>{item.type.name}</Text>
    </Box>
  );

  const ItemSeparator = () => <Box {...styles.typeSeparator} />;

  return (
    <HStack {...styles.typesContainer}>
      <FlatList
        data={types}
        renderItem={renderTypeChip}
        keyExtractor={(item, index) => `${item.type.name}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.typesList}
      />
    </HStack>
  );
};

export default React.memo(PokemonTypes);
