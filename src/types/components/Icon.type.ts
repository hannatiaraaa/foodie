import {COLOR, COLOR_BY_FOOD_TYPE} from 'configs/colors';

export const ICON_COLOR = {
  ...COLOR,
  ...COLOR_BY_FOOD_TYPE,
} as const;

export type ICON_COLOR = (typeof ICON_COLOR)[keyof typeof ICON_COLOR];

export enum ICON_BY_FOOD_TYPE {
  VEGAN = 'leaf',
}

export enum TEXT_ICON_BY_FOOD_TYPE {
  VEGAN = 'vegan',
}
