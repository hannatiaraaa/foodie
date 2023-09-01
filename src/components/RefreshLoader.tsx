import React from 'react';
import {COLOR} from 'configs/colors';
import {ActivityIndicator} from 'react-native';

export const RefreshLoader = () => {
  return <ActivityIndicator color={COLOR.LIGHT_ORANGE} size={'large'} />;
};
