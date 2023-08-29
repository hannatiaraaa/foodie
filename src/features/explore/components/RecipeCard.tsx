import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import type {TSearchRecipesItem} from 'types/features/explore/searchRecipes.type';
import {
  ICON_BY_FOOD_TYPE,
  ICON_COLOR,
  TEXT_ICON_BY_FOOD_TYPE,
} from 'types/components/Icon.type';
import {COLOR} from 'configs/colors';

// components
import {RoundedIcon} from 'components/RoundedIcon';
import {GlobalText} from 'components/GlobalText';

type Props = {
  item: TSearchRecipesItem;
};

export const RecipeCard = ({item}: Props) => {
  console.log(item, 'ini item');
  const {title, image, vegan} = item;

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        {vegan && (
          <RoundedIcon
            name={ICON_BY_FOOD_TYPE.VEGAN}
            backgroundColor={ICON_COLOR.VEGAN}
            text={TEXT_ICON_BY_FOOD_TYPE.VEGAN}
          />
        )}
      </View>
      <View style={styles.card}>
        <FastImage
          resizeMode="cover"
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={styles.content}>
          <GlobalText size={16}>{title}</GlobalText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    marginVertical: ms(8),
  },
  card: {
    flex: 1,
    borderRadius: ms(16),
    marginLeft: ms(4),
  },
  content: {
    backgroundColor: COLOR.LIGHT_ORANGE,
  },
  image: {
    width: '100%',
    height: heightPercentageToDP(20),
  },
});
