import React from 'react';
import { VStack, Text } from '@gluestack-ui/themed';
import { HEADER_STYLES as styles } from './Header.styles';
import { HEADER_CONTENT } from '@/src/constants/header';

const Header: React.FC = () => (
  <VStack {...styles.container}>
    <Text {...styles.titleText}>{HEADER_CONTENT.GREETING}</Text>
    <Text {...styles.subtitleText}>{HEADER_CONTENT.SUBTITLE}</Text>
  </VStack>
);

export default Header;
