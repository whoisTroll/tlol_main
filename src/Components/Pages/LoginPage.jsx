import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {useSearchParams,useNavigate} from 'react-router-dom'

import LoginForm from '../Molecul/LoginForm'

import {getKakaoTokenApiParam} from '../../Config/kakaoAuth'
import {ACOUNT_URI} from '../../Config/Urls'
import { Link } from '@mui/material'

// import styled from 'styled-components'

const LoginPage=()=>{
    const [searchParams] = useSearchParams()
    const [islogin, setislogin] = useState(false);
    
    let navigate = useNavigate()
    useEffect(() => {
        const code = searchParams.get("code")
        if ((!islogin)&&code) {
            const payload = getKakaoTokenApiParam(code);
            const getToken = async ()=>{
                console.log(payload.payload)
                try {
                    const data = await axios.post(payload.url, payload.payload);
                    console.log(data)
                    const token = data.data.access_token
                    console.log(token)
                    const t = await axios.post("/api/account/user/login",{
                        "accessToken" : token
                    })
                    setislogin(true)
                    console.log(t,"?")
                    return navigate("/")
                } catch (error) {
                    return navigate("/")

                }
            }
            getToken()
        }else{
            
        }
    }, [])
    const readBl = async () => {
        let response = await axios.get(
                "/api/blacklist"
            )
        alert(JSON.stringify(response))
     }
    return (
        <>
        로딩중
        </>
    )
}
export default LoginPage