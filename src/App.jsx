import Header from "./components/Header";
import FoodOrderContextProvider from "./food-order-context";
import Shop from "./components/Shop";

function App() {
  return (
    <FoodOrderContextProvider>
      <Header/>
      <Shop/>
    </FoodOrderContextProvider>
  );
}

export default App;
