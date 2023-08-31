import React from 'react';
import {
  View,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  TouchableOpacity,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import type {IconProps} from 'react-native-vector-icons/Icon';
import {COLOR} from 'configs/colors';
import {FontWeight} from 'types/components/GlobalText.type';

// components
import {GlobalText} from './GlobalText';
import VectorIcons, {getVectorIconName} from 'configs/VectorIcons';

interface Props extends IconProps {
  iconFamily?: keyof typeof VectorIcons;
  name: string;
  type?: 'default' | 'circle';
  backgroundColor?: string;
  size?: number;
  color?: COLOR;
  text?: string;
  fontSize?: number;
  fontColor?: COLOR;
  fontType?: FontWeight;
  containerStyle?: ViewStyle;
  iconContainerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

interface Style extends ViewStyle {
  size: number;
}

export const Icon = ({
  iconFamily = 'FontAwesome6',
  name,
  type = 'default',
  size = 20,
  color = COLOR.LIGHT_TEXT,
  backgroundColor,
  text,
  fontSize = 12,
  fontColor = COLOR.LIGHT_TEXT,
  fontType = FontWeight._500,
  containerStyle,
  iconContainerStyle,
  style,
  textStyle,
  onPress,
}: Props) => {
  const VectorIcon = getVectorIconName(iconFamily);

  const styles = useStyles({
    backgroundColor,
    size,
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={onPress ? 0.2 : 1}
        style={[type === 'circle' && styles.roundedIcon, iconContainerStyle]}>
        <VectorIcon name={name} size={ms(size)} color={color} style={style} />
      </TouchableOpacity>
      {text && (
        <GlobalText
          size={fontSize}
          color={fontColor}
          textAlign="center"
          type={fontType}
          style={[styles.text, textStyle]}>
          {text}
        </GlobalText>
      )}
    </View>
  );
};

const useStyles = ({size, backgroundColor}: Style) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: ms(4),
    },
    roundedIcon: {
      borderRadius: size * 3,
      backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      width: size * 2,
      height: size * 2,
    },
    text: {
      flex: 1,
      flexWrap: 'wrap',
    },
  });
