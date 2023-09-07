import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterCustomer from "./pages/RegisterCustomer";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/header/Header";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { TokenContext, TokenDispatchContext } from "./context/TokenContext";
import { useReducer } from "react";
import ProductPage from "./pages/ProductPage";
import { CartListProductContext } from "./context/CartListProduct";
import Cart from "./pages/Cart";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCTS_TO_CART_MUTATION } from "./graphqlFiles/mutations";
function App() {
  const initialToken = "";
  const initialCart = [];
  const [addItemToCart] = useMutation(ADD_PRODUCTS_TO_CART_MUTATION);

  const tokenReducer = (token, action) => {
    if (action.type === "createToken") {
      localStorage.setItem("token", action.token);
      return localStorage.getItem("token");
    } else if (action.type === "deleteToken") {
      localStorage.removeItem("token");
    }
  };

  const cartListProductsReducer = async (state, action) => {
    if (action.type === "addProductToCartList") {
      const cartItems = [
        {
          quantity: action.quantity,
          sku: action.productToBuy.sku,
        },
      ];
      try {
        const cartId=localStorage.getItem("CartId");
        const response = await addItemToCart({
          variables: { cartId, cartItems },
        });
        const newItem = response.data.addProductsToCart.cart.items;
        return state.then((response) => {
          return [...response, newItem];
        });
      } catch (error) {
        console.error(error);
        return state;
      }
    }
    return state;
  };

  function handleChangeToken(token) {
    dispatch({
      type: "createToken",
      token: token,
    });
  }

  function handleDeleteToken() {
    dispatch({
      type: "deleteToken",
    });
  }

  function handleAddProductToCartList(productToBuy, quantity) {
    dispatchCartListProducts({
      type: "addProductToCartList",
      productToBuy: productToBuy,
      quantity: quantity,
    });
  }

  const [token, dispatch] = useReducer(tokenReducer, initialToken);
  const [cartListProducts, dispatchCartListProducts] = useReducer(
    cartListProductsReducer,
    initialCart
  );
  
  return (
    <TokenContext.Provider value={token}>
      <TokenDispatchContext.Provider value={dispatch}>
        <CartListProductContext.Provider value={cartListProducts}>
          <div className="flex flex-col min-h-screen">
            <Header handleDeleteToken={handleDeleteToken} />
            <Navbar />
            <Routes>
              <Route path="/signUp" element={<RegisterCustomer />}></Route>
              <Route
                path="/signIn"
                element={<SignIn handleChangeToken={handleChangeToken} />}
              ></Route>
              <Route path="/" element={<HomePage />}></Route>
              <Route
                path="/category/:categoryName/:categoryId"
                element={<Shop />}
              ></Route>
              <Route
                path="/category/:categoryName/:categoryId/:productSku"
                element={
                  <ProductPage
                    handleAddProductToCartList={handleAddProductToCartList}
                  />
                }
              ></Route>
              <Route path="/cartShop/:cartId" element={<Cart />}></Route>
            </Routes>
            <Footer />
          </div>
        </CartListProductContext.Provider>
      </TokenDispatchContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
