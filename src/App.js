import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterCustomer from './pages/RegisterCustomer';
import SignIn from './pages/SignIn';
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
      </Routes>
    </div>
  );
}

export default App;
