import { MealDTO } from '@components/dtos/MealDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistic: undefined
      register?: {
        meal?: MealDTO | undefined
      }
      description: undefined
      details: {
        meal: MealDTO | undefined
      }
    }
  }
}
