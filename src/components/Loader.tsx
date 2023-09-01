import React from 'react';
import {ActivityIndicator} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {COLOR} from 'configs/colors';
import {ms} from 'react-native-size-matters';

type TSkeletonProps = {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  backgroundColor?: COLOR;
  highlightColor?: COLOR | string;
  enabled?: boolean;
  borderRadius?: number;
};

export const RefreshLoader = () => (
  <ActivityIndicator color={COLOR.LIGHT_ORANGE} size={'large'} />
);

export const SkeletonLoader = ({
  children,
  backgroundColor = COLOR.SKELETON_BACKGROUND,
  highlightColor = COLOR.DARK_GRAY,
  borderRadius,
  direction,
}: TSkeletonProps) => (
  <SkeletonPlaceholder
    backgroundColor={backgroundColor}
    highlightColor={highlightColor}
    speed={1000}
    borderRadius={ms(borderRadius ?? 0)}
    direction={direction}>
    <>{children}</>
  </SkeletonPlaceholder>
);
