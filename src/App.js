import React, { useState, useEffect, useLayoutEffect } from 'react'
import Routes from './Components/Routes'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './App.css';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import axios from 'axios';
import LoginForm from './Components/Molecul/LoginForm';

function NavBar(props) {
  return(
    
    <Toolbar sx={{display:"flex", justifyItems:"center", justifyContent:"center"}}>
          {
          props.isLoading?"로딩중입니다.":(props.isLogin?(<>
            <Link to="/">홈</Link>
            <Link to="/search">유저검색</Link>
            <Link to="/tlollist">내 트롤목록</Link>
            </>):<LoginForm/>)
            }
    </Toolbar>
  )
}
function App() {
  const [isLogin, setisLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const locatoin = useLocation()
  const navigate = useNavigate()
  function handleLogin(islogined) {
    setisLogin(islogined)
  }
  useLayoutEffect(() => {
    !isLoading&&setIsLoading(true)
    if(isLoading){
      fetch("/api/account/user/check").then(
      (res)=>{
        if(res.status == 401){
          console.log("?")
          return res.json()
        }
        return res.text()
      })
      .then((text)=>{
        console.log(text,"????????")
        setIsLoading(false)
        text=="인증된 사용자 입니다."&&setisLogin(true)
      })
    }else{
      navigate('/')
    }
  }, [])
  useEffect(()=>console.log("로그인?",isLogin),[isLogin])
  console.log(locatoin.pathname.includes("tlolcard"),locatoin.pathname)
  if(locatoin.pathname.includes("tlolcard")){
      return <Routes handleLogin={handleLogin} isLogin={isLogin}/>
      
  }
  return (
    <div>
      <AppBar position="fixed" >
        <Toolbar>
          Tlol
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Routes handleLogin={handleLogin} isLogin={isLogin}/>
      <AppBar variant="elevation" color="inherit" position="fixed" sx={{bottom:0, top:'auto'}}>
        <NavBar isLogin={isLogin} isLoading={isLoading}/>
      </AppBar>
      <Toolbar/>
    </div>
  );
}

export default App;