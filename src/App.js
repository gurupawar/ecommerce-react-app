import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import { CartProvider } from "react-use-cart";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products");
    setItemsData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Switch>
        <CartProvider>
          <Header />
          <Route
            exact
            path="/"
            component={() => (
              <Products itemsData={itemsData} loading={loading} />
            )}
          />
          <Route exact path="/cart" component={Cart} />
        </CartProvider>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
