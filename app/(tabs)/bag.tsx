import { BAG_SCREEN_STYLES as styles } from '@/src/styles/BagScreen.styles';
import { Text, VStack } from '@gluestack-ui/themed';
import React from 'react';

const BagTab: React.FC = () => {
  return (
    <VStack {...styles.container}>
      <Text {...styles.title}>תיק</Text>
      <Text {...styles.subtitle}>כאן יוצגו הפוקימונים שנתפסו</Text>
    </VStack>
  );
};

export default BagTab;
