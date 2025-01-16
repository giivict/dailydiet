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

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();
    const updatedMeals = [...storedMeals, newMeal];

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    throw error;
  }
}
