/* eslint-disable no-useless-catch */
import { MealDTO } from 'src/dtos/MealDTO'
import { mealRemove } from './meallRemove'
import { mealCreate } from './mealCreate'

export async function mealUpdate(id: string | number[], meal: MealDTO) {
  try {
    await mealRemove(id)
    await mealCreate(meal)
  } catch (error) {
    throw error
  }
}
