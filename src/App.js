import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterCustomer from './pages/RegisterCustomer';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
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
         path='/home' 
          element={<HomePage/>}> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
