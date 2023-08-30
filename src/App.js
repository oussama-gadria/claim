import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterCustomer from './pages/RegisterCustomer';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
         <Route  
          path='/signUp'
           element={<RegisterCustomer/>}> 
         </Route>
         <Route 
          path='/signIn'
           element={<SignIn/>}> 
        </Route>
        <Route 
         path='/' 
          element={<HomePage/>}> 
        </Route>
        <Route 
         path='/category/:categoryName/:uid' 
          element={<Shop/>}> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
