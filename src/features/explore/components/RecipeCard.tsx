import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import type {TSearchRecipesItem} from 'types/features/explore/searchRecipes.type';

// configs
import {COLOR, TRANSPARENCY_HEX_COLOR} from 'configs/colors';
import {foodLabels} from 'configs/foodLabels';

// hooks
import {applyMetricFormat} from 'Explore/hooks/applyMetricFormat';
import {applyDurationFormat} from 'Explore/hooks/applyDurationFormat';

// components
import {GlobalText} from 'components/GlobalText';
import {Icon} from 'components/Icon';
import {FontWeight} from 'types/components/GlobalText.type';

interface IRecipeCard extends TSearchRecipesItem {
  like?: boolean;
  onLikePress?: () => void;
}

interface IRenderRecipeCard extends Omit<IRecipeCard, 'id'> {
  likeIcon?: string;
}

type Props = {
  item: IRecipeCard;
  index?: number;
};

const RenderFoodLabels = ({item}: Props) => {
  return (
    <View style={styles.icon}>
      {foodLabels.map(value => {
        const {id, label, color, icon} = value;
        if (item[id as keyof TSearchRecipesItem]) {
          return (
            <Icon
              key={id}
              type="circle"
              name={icon}
              backgroundColor={color}
              text={label}
            />
          );
        }
        return null;
      })}
    </View>
  );
};

const RenderTitle = ({title}: IRenderRecipeCard) => (
  <View style={styles.titleContainer}>
    <GlobalText
      type={FontWeight._900}
      color={COLOR.LIGHT_TEXT}
      size={20}
      style={styles.title}>
      {title}
    </GlobalText>
  </View>
);

const RenderLike = ({
  aggregateLikes,
  likeIcon = 'heart-fill',
  onLikePress,
}: IRenderRecipeCard) => (
  <View style={styles.row}>
    <Icon
      onPress={onLikePress}
      name={likeIcon}
      iconFamily="Octicons"
      size={24}
      color={COLOR.RED_POSITIVE}
    />
    <GlobalText size={14} color={COLOR.DARK_BACKGROUND} type={FontWeight._700}>
      {aggregateLikes ? applyMetricFormat(aggregateLikes) : '0'}
    </GlobalText>
  </View>
);

const RenderReadyInMinutes = ({readyInMinutes}: IRenderRecipeCard) => (
  <View style={styles.row}>
    <Icon name="history" iconFamily="Octicons" size={24} color={COLOR.GRAY} />
    <GlobalText size={14} color={COLOR.DARK_BACKGROUND} type={FontWeight._500}>
      Ready in {applyDurationFormat(readyInMinutes ?? 0, 'minutes', 'hours')}
    </GlobalText>
  </View>
);

export const RecipeCard = ({item, index}: Props) => {
  const {
    title,
    image,
    aggregateLikes = 0,
    readyInMinutes,
    like,
    onLikePress,
  } = item;

  return (
    <View>
      <TouchableOpacity style={styles.content} activeOpacity={0.8}>
        <View style={styles.card}>
          <FastImage
            resizeMode="cover"
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <RenderTitle title={title} />
        </View>
        <RenderFoodLabels item={item} index={index} />
      </TouchableOpacity>
      <View style={styles.infoColumn}>
        <RenderLike
          aggregateLikes={aggregateLikes + (like ? 1 : 0)}
          likeIcon={like ? 'heart-fill' : 'heart'}
          onLikePress={onLikePress}
        />
        <RenderReadyInMinutes readyInMinutes={readyInMinutes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginHorizontal: ms(16),
    gap: ms(8),
  },
  icon: {
    gap: ms(8),
  },
  card: {
    flex: 1,
    borderRadius: ms(16),
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: ms(16),
    backgroundColor: COLOR.GRAY + TRANSPARENCY_HEX_COLOR._25,
    paddingBottom: ms(48),
    overflow: 'hidden',
    paddingHorizontal: ms(12),
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    textShadowColor: COLOR.DARK_BACKGROUND + TRANSPARENCY_HEX_COLOR._80,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: ms(72) * foodLabels.length,
    borderTopLeftRadius: ms(16),
    borderTopRightRadius: ms(16),
    paddingBottom: ms(16),
  },
  infoColumn: {
    marginTop: -ms(32),
    backgroundColor: COLOR.GOLD,
    paddingVertical: ms(8),
    paddingHorizontal: ms(24),
    borderRadius: ms(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: ms(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(8),
  },
});
