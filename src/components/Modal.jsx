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
    checkout: false
  });

  useImperativeHandle(ref, ()=>{
    return {
      open(){
        dialog.current.showModal();
      },
    }
  });

  function handleCartToCheckoutClick(){
    // 다시 원래대로로 돌려놔야 하지 않나? 
    setCartOrCheckout((prev) => ({
      cart: !prev.cart,
      checkout: !prev.checkout
    }))
  };

  // children으로 받지 말고 Cart인지 CheckoutForm인지를 여기서 판단 
  // CheckoutForm에서는 close button을 눌렀을 때 handleCart...
  return createPortal(
    <dialog className="modal" ref={dialog}>
      {cartOrCheckout.cart ? 
        <Cart onSet={handleCartToCheckoutClick}/> :
        <CheckoutForm onSet={handleCartToCheckoutClick}/>}
    </dialog>
  , document.getElementById('modal'));
});

export default Modal;