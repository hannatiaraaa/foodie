import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {ms} from 'react-native-size-matters';
import {COLOR} from 'configs/colors';
import {FontWeight, IGlobalText} from 'types/components/GlobalText.type';

export const GlobalText = ({
  color = COLOR.LIGHT_TEXT,
  size = 14,
  type = FontWeight._400,
  textAlign = 'left',
  style,
}: IGlobalText) => {
  const styles = useStyles({
    color,
    fontSize: ms(size),
    fontFamily: `RedHatDisplay-${type}`,
    textAlign,
  });

  return <Text style={[styles.text, style]} />;
};

const useStyles = (props: TextStyle) =>
  StyleSheet.create({
    text: props,
  });
