import { useContext } from "react"
import { FoodOrderContext } from "../food-order-context"
import Product from "./Product";

export default function Shop(){
  const { availableItems } = useContext(FoodOrderContext);
  console.log(availableItems);
  // 각 availableItem은 id, name, price, description, image로 구성 
  // children으로 받지 말고 
  return (
    <section>
      <ul id="meals">
        {availableItems.map((product)=>(
          <li key={product.id}>
            <Product {...product}/>
          </li>
        ))}
      </ul>
    </section>
  )
}