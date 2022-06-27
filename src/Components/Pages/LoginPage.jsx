import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {useSearchParams,useNavigate} from 'react-router-dom'

import LoginForm from '../Molecul/LoginForm'

import {getKakaoTokenApiParam} from '../../Config/kakaoAuth'
import {ACOUNT_URI} from '../../Config/Urls'
import { Link } from '@mui/material'

// import styled from 'styled-components'

const LoginPage=({handleLogin})=>{
    const [searchParams] = useSearchParams()
    const [loginErr, setLoginErr] = useState(false)
    
    let navigate = useNavigate()
    useEffect(() => {
        const code = searchParams.get("code")
        if (code) {
            const payload = getKakaoTokenApiParam(code);
            const getToken = async ()=>{
                console.log(payload.payload)
                try {
                    const data = await axios.post(payload.url, payload.payload);
                    const token = data.data.access_token;
                    console.log(token)
                    await fetch("/api/account/user/login",{
                        method:"POST",
                        headers:{
                          'Content-Type':"application/json"
                        },
                        body:JSON.stringify({"accessToken" : token})
                    })
                    handleLogin(true)
                    navigate('/')
                } catch (error) {
                    setLoginErr(true)
                }
            }
            getToken()
        }else{
            
        }
    }, [])
    useEffect(()=>{
        loginErr&&navigate('/')
    },[loginErr])
    return (
        <>
        로딩중
        </>
    )
}
export default LoginPage