import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealGetAll } from "./mealGetAll";

type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isHealthy: boolean;
};

export async function mealRemoveByName(mealRemoved: Meal) {
  try {
    const storedMeals = await mealGetAll();
    const meals = storedMeals.filter((meal) => meal.id !== mealRemoved.id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}
