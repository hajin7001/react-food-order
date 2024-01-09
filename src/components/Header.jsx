import logoImg from '../assets/logo.jpg';

export default function Header(){

  // button은 cart를 위한 button - handleClick function 만들기 
  // modal에 연결하기 cart 누르면 modal이 나오도록 
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