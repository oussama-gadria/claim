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
function App() {
  const initialToken = "";
  const tokenReducer = (token,action) => {
    if (action.type === "createToken") {
      localStorage.setItem("token", action.token);
      return localStorage.getItem("token");
    } else if (action.type === "deleteToken") {
      localStorage.removeItem("token");
    }
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
  const [token, dispatch] = useReducer(tokenReducer, initialToken);
  return (
    <TokenContext.Provider value={token}>
      <TokenDispatchContext.Provider value={dispatch}>
        <div className="flex flex-col min-h-screen">
          <Header handleDeleteToken={handleDeleteToken}/>
          <Navbar />
          <Routes>
            <Route path="/signUp" element={<RegisterCustomer />}></Route>
            <Route path="/signIn" element={<SignIn handleChangeToken={handleChangeToken}  />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/category/:categoryName/:uid"
              element={<Shop />}
            ></Route>
          </Routes>
          <Footer />
        </div>
      </TokenDispatchContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
