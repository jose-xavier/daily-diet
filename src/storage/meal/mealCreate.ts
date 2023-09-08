/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { MealDTO } from 'src/dtos/MealDTO'
import { mealGetAll } from './mealGetAll'

export async function mealCreate(newMeal: MealDTO) {
  try {
    const storedMeals = await mealGetAll()

    const storage = JSON.stringify([...storedMeals, newMeal])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
