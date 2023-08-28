import {COLOR} from 'configs/colors';
import {TextProps} from 'react-native';

export enum FontWeight {
  _300 = 'Light',
  I_300 = 'LightItalic',
  _400 = 'Regular',
  I_400 = 'Italic',
  _500 = 'Medium',
  I_500 = 'MediumItalic',
  _600 = 'SemiBold',
  I_600 = 'SemiBoldItalic',
  _700 = 'Bold',
  I_700 = 'BoldItalic',
  _800 = 'ExtraBold',
  I_800 = 'ExtraBoldItalic',
  _900 = 'Black',
  I_900 = 'BlackItalic',
}

export type TTextAlign = 'left' | 'auto' | 'right' | 'center' | 'justify';

export interface IGlobalText extends TextProps {
  color?: COLOR;
  size?: number;
  type?: FontWeight;
  textAlign?: TTextAlign;
}
