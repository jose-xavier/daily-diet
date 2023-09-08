import { MealDTO } from 'src/dtos/MealDTO'
import { mealCreate } from '@storage/meal/mealCreate'
import { mealGetAll } from '@storage/meal/mealGetAll'
import { ReactNode, createContext, useCallback, useState } from 'react'
import { utcToZonedTime } from 'date-fns-tz'

type MealContextProviderProps = {
  children: ReactNode
}

export type SumaryMeals = {
  total: number
  inDiet: number
  offDiet: number
  porcent: number
  currentStreak: number
  maxStreak: number
}

type MealContextTypes = {
  meals: MealDTO[]
  addNewMeal: (meal: MealDTO) => void
  fetchMeals: () => void
  sumaryMeals: SumaryMeals
}

export const MealContext = createContext({} as MealContextTypes)

export function MealContextProvider({ children }: MealContextProviderProps) {
  const [meals, setMeals] = useState<MealDTO[]>([])

  const fetchMeals = useCallback(async () => {
    const data = await mealGetAll()
    setMeals(data)
  }, [])

  async function addNewMeal(meal: MealDTO) {
    await mealCreate(meal)
    const meals = await mealGetAll()
    console.log(meals)
  }

  const sumaryMeals: SumaryMeals = meals.reduce(
    (acc, meal) => {
      if (meal.inDiet) {
        acc.inDiet += 1;
        acc.currentStreak += 1; // Incrementa a sequência atual se a refeição estiver dentro da dieta.
        if (acc.currentStreak > acc.maxStreak) {
          acc.maxStreak = acc.currentStreak; // Atualiza a maior sequência se necessário.
        }
      } else {
        acc.offDiet += 1;
        acc.currentStreak = 0; // Zera a sequência atual se a refeição estiver fora da dieta.
      }
  
      acc.total += 1;
  
      acc.porcent = Number(((acc.inDiet / acc.total) * 100).toFixed(2));
  
      return acc;
    },
    {
      total: 0,
      inDiet: 0,
      offDiet: 0,
      porcent: 0,
      currentStreak: 0, // Adicione a sequência atual como uma propriedade inicial.
      maxStreak: 0, // Adicione a maior sequência como uma propriedade inicial.
    } as SumaryMeals
  );
  return (
    <MealContext.Provider
      value={{ meals, addNewMeal, fetchMeals, sumaryMeals }}
    >
      {children}
    </MealContext.Provider>
  )
}
