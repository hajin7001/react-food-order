import { useContext } from "react";
import { FoodOrderContext } from "../food-order-context";

export default function Cart({title, onSet}){
  
  const {cartItems, updateItemQuantity} = useContext(FoodOrderContext);
  const cartQuantity = cartItems.length;

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;


  let modalActions = <button className="text-button">Close</button>;
  if(cartQuantity > 0){
    modalActions = (
      <>
        <button className="text-button">Close</button>
        <button onClick={() => onSet(totalPrice)} className="button">Go to Checkout</button>
      </>
    )
  }

  // 고쳐야 할게 close를 눌렀을 때 close가 되는 것
  return (
    <div className="cart">
      <h2>{title}</h2>
      {cartQuantity == 0 && <p>No Items in Cart!</p>}
      {cartQuantity > 0 && (
        <ul>
          {cartItems.map((item)=>{
            const formattedPrice = `$${item.price}`
            return (
              <li key={item.id} className="cart-item">
                <p>{item.name} - {item.quantity} x {formattedPrice}</p>
                <span className="cart-item-actions">
                  <button onClick={()=>updateItemQuantity(item, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
                </span>
              </li>
            )
          })}
        </ul>
      )}
      <p className="cart-total">{formattedTotalPrice}</p>
      <form method="dialog" className="modal-actions">
        {modalActions}
      </form>
    </div>
  )
}