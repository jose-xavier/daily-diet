import AsyncStorage from '@react-native-async-storage/async-storage'
import { mealGetAll } from './mealGetAll'
import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function mealRemove(id: string | number[]) {
  const storage = await mealGetAll()

  const mealsFiltered = storage.filter((meal) => meal.id !== id)

  const meals = JSON.stringify(mealsFiltered)

  await AsyncStorage.setItem(MEAL_COLLECTION, meals)
}
