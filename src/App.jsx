import Header from "./components/Header";
import FoodOrderContextProvider from "./food-order-context";

function App() {
  return (
    <FoodOrderContextProvider>
      <Header/>
    </FoodOrderContextProvider>
  );
}

export default App;
