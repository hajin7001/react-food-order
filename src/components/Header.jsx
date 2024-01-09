import logoImg from '../assets/logo.jpg';
import { useRef, useContext } from 'react';
import Modal from './Modal';
import { FoodOrderContext } from '../food-order-context';

export default function Header(){

  // button은 cart를 위한 button - handleClick function 만들기 
  // modal에 연결하기 cart 누르면 modal이 나오도록 그리고 cart에 있는 go to checkout button 누르면 checkout modal로 연결 

  const modal = useRef();
  const { items } = useContext(FoodOrderContext);
  const cartQuantity = items.length;

  function handleOpenCartClick(){
    modal.current.open();
  }
  
  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo Image" />
        <h1>Food Order App</h1>
        <button>Cart</button>
      </div>
    </div>
  )
}