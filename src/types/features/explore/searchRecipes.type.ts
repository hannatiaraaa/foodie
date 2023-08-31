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
  id: number;
  title?: string;
  image?: string;
  creditsText?: string;
  aggregateLikes?: number;
  readyInMinutes?: number;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  veryHealthy?: boolean;
  dishTypes?: string[];
  nutrition?: TNutrition;
};
