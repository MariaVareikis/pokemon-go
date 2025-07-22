import { ERROR_BOUNDARY_CONTENT } from '@/src/constants/errorBoundary';
import { Text, VStack } from '@gluestack-ui/themed';
import React, { PropsWithChildren } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import LinearGradientBackground from '../LinearGradientBackground/LinearGradientBackground';
import { ERROR_BOUNDARY_STYLES as styles } from './ErrorBoundary.styles';

const ErrorFallback = () => (
  <LinearGradientBackground>
    <VStack {...styles.container}>
      <Text {...styles.emoji}>{ERROR_BOUNDARY_CONTENT.EMOJI}</Text>

      <Text {...styles.errorTitle}>{ERROR_BOUNDARY_CONTENT.TITLE}</Text>

      <Text {...styles.errorSubtext}>{ERROR_BOUNDARY_CONTENT.SUBTITLE}</Text>
    </VStack>
  </LinearGradientBackground>
);

const handleError = (error: Error) => {
  console.error('App Error:', error);
};

const ErrorBoundary: React.FC<PropsWithChildren> = ({ children }) => (
  <ReactErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
    {children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;
