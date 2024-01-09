import { useState, useRef } from "react"

export default function CheckoutForm({onSet, totalPrice}){
  // 이 component만 제대로 작성하면 끝!!
  // label, input, row
  function handleSubmit(event){
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalPrice}</p>
      <div>
        <div className="control">
          <label htmlFor="fullname" >Full Name</label>
          <input 
            id="fullname"
            type="text"
            name="fullname"
            />
        </div>
        <div className="control">
          <label htmlFor="email">E-mail Address</label>
          <input 
            id="email"
            type="email"
            name="email"
            />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input 
            id="street"
            type="text"
            name="street"
            />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input 
              id="postal-code"
              type="text"
              name="postal-code"
              />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input 
              id="city"
              type="text"
              name="city"
              />
          </div>
        </div>
      </div>
      <div method="dialog" className="modal-actions">
        <button onClick={() => onSet(0)} className="text-button">Close</button>
        <button className="button">Submit Order</button>
      </div>
    </form>
  )
}