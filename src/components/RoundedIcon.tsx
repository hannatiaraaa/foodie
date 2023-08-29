import React from 'react';
import {View, StyleSheet, type ViewStyle, type TextStyle} from 'react-native';
import {ms} from 'react-native-size-matters';
import type {IconProps} from 'react-native-vector-icons/Icon';
import {COLOR} from 'configs/colors';
import {ICON_COLOR} from 'types/components/Icon.type';

// components
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {GlobalText} from './GlobalText';

interface Props extends IconProps {
  name: string;
  backgroundColor?: ICON_COLOR;
  size?: number;
  color?: COLOR;
  iconContainerStyle?: ViewStyle;
  text?: string;
  fontSize?: number;
  fontColor?: COLOR;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const RoundedIcon = ({
  name,
  size = 20,
  color = COLOR.LIGHT_TEXT,
  backgroundColor = ICON_COLOR.VEGAN,
  iconContainerStyle,
  text,
  fontSize = 10,
  fontColor = COLOR.LIGHT_TEXT,
  containerStyle,
  textStyle,
}: Props) => {
  const styles = useStyles({
    backgroundColor,
    borderRadius: size * 3,
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.icon, iconContainerStyle]}>
        <FontAwesome6 name={name} size={ms(size)} color={color} />
      </View>
      {text && (
        <GlobalText
          size={ms(fontSize)}
          color={fontColor}
          style={[styles.text, textStyle]}>
          {text}
        </GlobalText>
      )}
    </View>
  );
};

const useStyles = ({borderRadius, backgroundColor}: ViewStyle) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      flex: 1,
      alignItems: 'center',
    },
    icon: {
      borderRadius,
      backgroundColor,
      padding: ms(2),
    },
    text: {
      flex: 1,
      flexWrap: 'wrap',
    },
  });
