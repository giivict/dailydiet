import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Created } from "@screens/Created";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { MealEdit } from "@screens/MealEdit";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

export type RootStackParamList = {
  home: undefined;
  created: { option: "Healthy" | "UnHealthy" | undefined };
  new: undefined;
  statistics: {
    statistics: {
      percentage: number;
      totalMeals: number;
      healthyMeals: number;
      unhealthyMeals: number;
      bestSequence: number;
    };
  };
  meal: { mealId: string };
  edit: { mealId: string };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="created" component={Created} />
      <Screen name="new" component={NewMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="meal" component={Meal} />
      <Screen name="edit" component={MealEdit} />
    </Navigator>
  );
}
