import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isHealthy: boolean;
};

export async function mealGetAll(): Promise<Meal[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: Meal[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}
