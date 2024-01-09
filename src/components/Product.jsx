import { useContext } from "react";
import { FoodOrderContext } from "../food-order-context";

export default function Product({
  id,
  image,
  name,
  price,
  description
}) {
  const { addItemsToCart } = useContext(FoodOrderContext);

  // add items to cart를 하는 순간 에러 잔뜩
  return (
    
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <div>
            <h3>{name}</h3>
            <p className="meal-item-price">${price}</p>
            <p className="meal-item-description">{description}</p>
          </div>
          <p className="meal-item-actions">
            <button onClick={() => addItemsToCart(id)} className="button">Add to Cart</button>
          </p>
        </div>
      </article>
    </div>
  );
}
