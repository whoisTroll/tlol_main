import React, { useState, useEffect} from 'react'
import Routes from './Components/Routes'
import {Link as RouterLink, useLocation, useNavigate} from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Link, styled, TextField, InputAdornment, Container } from '@mui/material';
import LoginForm from './Components/Molecul/LoginForm';
import { Home, ListIcon, Logo, Search } from './Components/atoms/Icon';

import {ReactComponent as WelcomeLogo}  from './Images/WelcomeLogo.svg'
import { RecoilRoot, useRecoilState } from 'recoil';
import SearchInput from './Components/Molecul/SearchInput';

function MainDoor(props){

  return(
    <WelcomeLogo/>
  )
}


const ExLink = styled(Link)`
  display: flex;
  height:100%;
  box-sizing: border-box;
  text-decoration: none;
  color:#999898;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 20px 0px 11px 0px;
  justify-content: space-around;
`

function NavBar(props) {


  const loc = useLocation()
  const l = loc.pathname
  console.log(l)
  return(
    <Toolbar sx={{height:"80px", display:"flex", justifyItems:"center", justifyContent:"space-around"}}>
            <ExLink component={RouterLink} to="/"><Home selected={(()=>l=="/")()}/><span style={{fontWeight:"500",fontSize:"12px",color:(()=>l=="/")()?"#E1251B":"#989090"}}>홈</span></ExLink>
            <ExLink component={RouterLink} to="/search"><Search onclick={()=>console.log("???")} selected={(()=>l=="/search")()}/><span style={{fontWeight:"500",fontSize:"12px",color:(()=>l=="/search")()?"#E1251B":"#989090"}}>유저검색</span></ExLink>
            <ExLink component={RouterLink} to="/tlollist"><ListIcon selected={(()=>l=="/tlollist")()}/><span style={{fontWeight:"500",fontSize:"12px",color:(()=>l=="/tlollist")()?"#E1251B":"#989090"}}>내 트롤목록</span></ExLink>
            <ExLink component={RouterLink} to="/"><Home selected={(()=>l=="/")()}/><span style={{fontWeight:"500",fontSize:"12px",color:(()=>l=="/")()?"#E1251B":"#989090"}}>홈</span></ExLink>
    </Toolbar>
  )
}
const WelcomeContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

`
function App() {
  const [isLogin, setisLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const locatoin = useLocation()
  const navigate = useNavigate()
  function handleLogin(isLogined) {
    setisLogin(isLogined)
  }
  function handleLoading(isLoading){
    setIsLoading(isLoading)
  }
  useEffect(() => {
    !isLoading&&setIsLoading(true)
    if(isLoading){
      fetch("/api/account/user/check").then(
        (res)=>{
          if(res.status == 401){
          console.log("?")
          return res.json()
        }
        return res.json()
      })
      .then((json)=>{
        console.log(json,json.message=="인증된 사용자 입니다.","????????")
        setIsLoading(false)
        json.message=="인증된 사용자 입니다." && setisLogin(true)
      })
    }else{
      navigate('/')
    }
  }, [])
  console.log(locatoin.pathname.includes("tlolcard"),locatoin.pathname)
  if(locatoin.pathname.includes("tlolcard")){
      return <Routes handleLogin={handleLogin} isLogin={isLogin} handleLoading ={handleLoading}/>
      
  }


  return (
    <RecoilRoot>
      {!isLogin?(<>
      <WelcomeContainer>
        <MainDoor/>
        <LoginForm/>
        <Routes handleLogin={handleLogin} handleLoading={handleLoading} isLogin={isLogin} isLoading={isLoading}/>

      </WelcomeContainer>
      </>):
      (<>
        <Toolbar position="fixed"  sx={{justifyContent:"space-between",paddingTop:"20px",paddingBottom:"15px",display:"flex", flexDirection:"column", backgroundColor:"#FFFFFFFF", height:"142px", borderBottom:"solid 1px #D9DBE0", boxSizing:"border-box"}} >
          <Logo/>
          <SearchInput/>
        </Toolbar>
        <Toolbar/>
        <Routes handleLogin={handleLogin} handleLoading={handleLoading} isLogin={isLogin} isLoading={isLoading}/>
        <AppBar variant="elevation" color="inherit" position="fixed" sx={{bottom:0, top:'auto'}}>
          <NavBar isLogin={isLogin} isLoading={isLoading}/>
        </AppBar>
        <Toolbar/>
      </>)}
    </RecoilRoot>

  );
}
export default App;