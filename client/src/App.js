import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Login from './features/login/Login'
import Signup from './features/signup/Signup';
import About from './features/about/About';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  );
}

export default App;
