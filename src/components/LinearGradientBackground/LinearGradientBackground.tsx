import { LinearGradient } from 'expo-linear-gradient';
import React, { PropsWithChildren } from 'react';
import { BOX_STYLES, GRADIENT_CONFIG } from './LinearGradientBackground.styles';
import {GRADIENT_COLORS} from '@/src/constants/colors'

const LinearGradientBackground: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <LinearGradient
    colors={GRADIENT_COLORS}
    start={GRADIENT_CONFIG.start}
    end={GRADIENT_CONFIG.end}
    style={BOX_STYLES}
  >
    {children}
  </LinearGradient>
);

export default LinearGradientBackground;