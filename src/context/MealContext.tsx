import { MealDTO } from '@components/dtos/MealDTO'
import { useFocusEffect } from '@react-navigation/native'
import { mealCreate } from '@storage/meal/mealCreate'
import { mealGetAll } from '@storage/meal/mealGetAll'
import { ReactNode, createContext, useCallback, useState } from 'react'

type MealContextProviderProps = {
  children: ReactNode
}

type MealContextTypes = {
  meals: MealDTO[]
  addNewMeal: (meal: MealDTO) => void
  fetchMeals: () => void
}

export const MealContext = createContext({} as MealContextTypes)

export function MealContextProvider({ children }: MealContextProviderProps) {
  const [meals, setMeals] = useState<MealDTO[]>([])

  const fetchMeals = useCallback(async () => {
    const data = await mealGetAll()
    setMeals(data)
    console.log(meals)
  }, [])

  async function addNewMeal(meal: MealDTO) {
    await mealCreate(meal)
    const meals = await mealGetAll()
    console.log(meals)
  }

  return (
    <MealContext.Provider value={{ meals, addNewMeal, fetchMeals }}>
      {children}
    </MealContext.Provider>
  )
}
