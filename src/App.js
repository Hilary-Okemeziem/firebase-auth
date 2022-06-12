import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './Signin';
import Signup from './Signup';
import Account from './Account';
import { AuthContextProvider } from './context/AuthContext';
import Protectedroute from './Protectedroute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <h1 className='text-center text-3xl font-bold mt-8'>Firebase Authentication and Context</h1>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/account' element={
            <Protectedroute>
              <Account/>
            </Protectedroute>}/>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
