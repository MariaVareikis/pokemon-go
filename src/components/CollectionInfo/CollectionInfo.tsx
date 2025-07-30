import React from 'react';
import { VStack, HStack, Text } from '@gluestack-ui/themed';
import { POKEMON_INFO_CONTENT } from '@/src/constants/pokemonInfo';

interface Props {
  collectedCount: number;
  styles: any;
}

const CollectionInfo: React.FC<Props> = ({ collectedCount, styles }) => (
  <VStack {...styles.collectionInfoContainer}>
    <HStack {...styles.collectionInfoRow}>
      <Text {...styles.collectionIcon}>{POKEMON_INFO_CONTENT.EMOJIS.BAG}</Text>
      <Text {...styles.collectionMainText}>
        {POKEMON_INFO_CONTENT.COLLECTION_INFO.HAS_POKEMON} {collectedCount}
      </Text>
    </HStack>

    {collectedCount > 0 && (
      <Text {...styles.collectionSubText}>
        {collectedCount === 1
          ? POKEMON_INFO_CONTENT.COLLECTION_INFO.ONE_POKEMON
          : `${collectedCount} ${POKEMON_INFO_CONTENT.COLLECTION_INFO.MULTIPLE_POKEMON}`}
      </Text>
    )}
  </VStack>
);

export default React.memo(CollectionInfo);
