type TNutrientItem = {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
};

type TNutrition = {
  nutrients?: TNutrientItem[];
};

export type TSearchRecipesItem = {
  title?: string;
  image?: string;
  creditsText?: string;
  aggregateLikes?: number;
  readyInMinutes?: number;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  healthy?: boolean;
  dishTypes?: string[];
  nutrition?: TNutrition;
};