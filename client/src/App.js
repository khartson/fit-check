import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './features/home/Home';
import Login from './features/login/Login'
import Signup from './features/signup/Signup';
import About from './features/about/About';
import Feed from './features/feed/Feed';
import { useEffect } from 'react';
import { userLoggedIn } from './features/user/userSlice';
import { useDispatch } from 'react-redux'
function App() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user)=>{
          dispatch(userLoggedIn(user));
          // navigate('/feed');
        });
      }
    })
  }, [])
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/feed' element={<Feed/>}/>
    </Routes>
  );
}

export default App;
