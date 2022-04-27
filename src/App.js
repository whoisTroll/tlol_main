import React, { useState, useEffect } from 'react'
import Routes from './Components/Routes'
import {useNavigate} from 'react-router-dom'
import './App.css';


function App() {
  // const [isLogin, setisLogin] = useState(true)
  // const navigate = useNavigate()
  // if (isLogin) {
  //   return(
  //     navigate('/')
  //   )
  // }
  return (
    <>
      <Routes/>
    </>
  );
}

export default App;