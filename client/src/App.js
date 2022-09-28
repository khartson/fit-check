import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Login from './features/login/Login'
import Signup from './features/signup/Signup';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  );
}

export default App;
