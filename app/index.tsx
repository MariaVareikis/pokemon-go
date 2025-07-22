import React from 'react';
import { Redirect } from 'expo-router';
import { DEFAULT_ROUTE } from '@/src/constants/index';

const Index: React.FC = () => {
  return <Redirect href={DEFAULT_ROUTE} />;
};

export default Index;
