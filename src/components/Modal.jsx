import { useImperativeHandle, forwardRef, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";

const Modal = forwardRef(function Modal({}, ref){
  // modal 의 children으로 cart와 checkout form이 들어오도록 
  // 이러지 말고 CartModal을 만든 다음에 button을 눌러서 
  const dialog = useRef();
  const [cartOrCheckout, setCartOrCheckout] = useState({
    cart: true,
    checkout: false,
    totalPrice: 0
  });

  useImperativeHandle(ref, ()=>{
    return {
      open(){
        dialog.current.showModal();
      },
    }
  });

  function handleCartToCheckoutClick(newPrice){
    // 다시 원래대로로 돌려놔야 하지 않나? 
    setCartOrCheckout((prev) => ({
      ...prev,
      cart: !prev.cart,
      checkout: !prev.checkout,
      totalPrice: newPrice
    }))
  };

  // cart에서 구한 totalPrice를 checkoutform으로 넘겨야 한다

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {cartOrCheckout.cart ? 
        <Cart onSet={handleCartToCheckoutClick}/> :
        <CheckoutForm 
          onSet={handleCartToCheckoutClick} 
          totalPrice={cartOrCheckout.totalPrice}/>}
    </dialog>
  , document.getElementById('modal'));
});

export default Modal;