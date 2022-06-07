import React, { useState, useEffect } from 'react'
import Routes from './Components/Routes'
import {useNavigate} from 'react-router-dom'
import './App.css';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import axios from 'axios';
import LoginForm from './Components/Molecul/LoginForm';

function App() {
  const [isLogin, setisLogin] = useState(false)
  function handleLogin() {
    setisLogin((prevLogin)=>!prevLogin)
  }
  useEffect(() => {
    axios.get("/api/account/user/check").then(
      (res)=>res.data.code&&setisLogin(true)
    )
  }, [])
  console.log("Test")
  return (
    <>
      <AppBar position="fixed" >
        <Toolbar>
          Tlol
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Routes handleLogin={handleLogin}/>

      <AppBar variant="elevation" color="inherit" position="fixed" sx={{bottom:0, top:'auto'}}>
        <Toolbar sx={{display:"flex", justifyItems:"center", justifyContent:"center"}}>
            {!isLogin&&<LoginForm/>}
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  );
}

export default App;