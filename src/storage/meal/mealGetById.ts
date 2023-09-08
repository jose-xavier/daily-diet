/* eslint-disable no-useless-catch */
import { MealDTO } from 'src/dtos/MealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function mealGetById(id: string | number[]) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealDTO[] = storage ? JSON.parse(storage) : []

    const meal = meals.find((meal) => meal.id === id)
    return meal
  } catch (error) {
    throw error
  }
}
