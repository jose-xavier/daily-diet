/* eslint-disable no-useless-catch */
import { MealDTO } from '@components/dtos/MealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealDTO[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}
