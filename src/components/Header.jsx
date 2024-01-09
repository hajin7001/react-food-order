import logoImg from '../assets/logo.jpg';

export default function Header(){

  // button은 cart를 위한 button
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