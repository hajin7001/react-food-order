import { createContext } from "react"

export const FoodOrderContext = createContext({
  items: [],
  addItemsToCart: () => {},
  updateItemsToCart: () => {}
});

export default function FoodOrderContextProvider({children}){

}