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
  const tokenReducer = (action) => {
    if (action.type==="createToken")
    return localStorage.getItem("token");
    else return ""
  };
  const [token, dispatch] = useReducer(tokenReducer, "");
  return (
    <TokenContext.Provider value={token}>
      <TokenDispatchContext.Provider value={dispatch}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/signUp" element={<RegisterCustomer />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
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
