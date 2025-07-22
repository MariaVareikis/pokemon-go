import React from 'react';
import { VStack, Text, Box } from '@gluestack-ui/themed';
import { HEADER_STYLES as styles } from './Header.styles';
import { HEADER_CONTENT } from '@/src/constants/header';

const Header: React.FC = () => (
  <VStack {...styles.container}>
    <Text {...styles.titleText}>{HEADER_CONTENT.GREETING}</Text>

    <Text {...styles.subtitleText}>{HEADER_CONTENT.SUBTITLE}</Text>

    <Box {...styles.separator} />
  </VStack>
);

export default Header;
