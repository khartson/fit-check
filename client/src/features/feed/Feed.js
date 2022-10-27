import React from 'react'; 
import { useSelector } from 'react-redux';

function Feed() {
  const user = useSelector((state)=>state.user.user)
  console.log(user);
  return <h1>Logged in as: {user.username} </h1>
}

export default Feed; 