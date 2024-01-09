import { useState } from "react";
import { createContext, useReducer, useEffect } from "react"

export const FoodOrderContext = createContext({
  availableItems: [],
  cartItems: [],
  addItemsToCart: () => {},
  updateItemQuantity: () => {}
});

function CartReducer(state, action){
  if(action.type === 'ADD_ITEM'){
    const updatedItems = [...state.cartItems];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = action.payload.listedItems.find((product) => product.id === action.payload.id);
        updatedItems.push({
          id: action.payload.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        cartItems: updatedItems,
      };
  }

  if(action.type === 'UPDATE_ITEM'){
    const updatedItems = [...state.cartItems];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        cartItems: updatedItems,
      };
  }
  return state;
}


export default function FoodOrderContextProvider({children}){

  const [cartState, cartDispatch] = useReducer(CartReducer, {
    cartItems: []
  });
  const [listedItems, setListedItems] = useState([]);

  function handleAddItemToCart(id) {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: {
        id: id, 
        listedItems: listedItems
      }
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId: productId,
        amount: amount,
        // 이건 javascript feature인데 property name이란 value name이 같으면 amount 이런식으로 1개만 써도 된다.
      }
    })
  }

  // 처음 접속시 item들을 모두 가져오는데...
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/meals');
        const resData = await response.json();
        // resData is the list of meals
        setListedItems(resData);

        // 제대로 나옴. 
        console.log(listedItems);
        ctxValue.availableItems = listedItems;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  // 문제는 listedItems가 먼저 들어온다는 것 useEffect의 render보다 
  const ctxValue = {
    availableItems: listedItems,
    cartItems: cartState.cartItems,
    addItemsToCart:handleAddItemToCart,
    updateItemQuantity:handleUpdateCartItemQuantity
  };

  return (
    <FoodOrderContext.Provider value={ctxValue}>
      {children}
    </FoodOrderContext.Provider>
  )
}