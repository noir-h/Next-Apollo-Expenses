import { makeVar } from '@apollo/client'
interface Expenses {
  title: string
  price: string
  category: string
}
export const listVar = makeVar<Expenses[]>([])
