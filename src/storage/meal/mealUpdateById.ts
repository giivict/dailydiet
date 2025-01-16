import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

type Meal = {
  id: string;
  name: string;
  description: string;
  hour: string;
  date: string;
  isHealthy: boolean;
};

export async function mealUpdateById(mealId: string, updatedMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();
    const updatedMeals = storedMeals.map((meal) =>
      meal.id === mealId ? updatedMeal : meal
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    throw error;
  }
}
