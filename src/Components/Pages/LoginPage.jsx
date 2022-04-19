import axios from 'axios'
import React,{useEffect} from 'react'
import {useSearchParams,useNavigate} from 'react-router-dom'

import LoginForm from '../Molecul/LoginForm'

import {getKakaoTokenApiParam} from '../../Config/kakaoAuth'
import {ACOUNT_URI} from '../../Config/Urls'

const LoginPage=()=>{
    const [searchParams] = useSearchParams()
    let navigate = useNavigate()
    useEffect(() => {
        const code = searchParams.get("code")
        if (code) {
            const payload = getKakaoTokenApiParam(code);
            const getToken = async ()=>{
                console.log(payload.payload)
                try {
                    const data = await axios.post(payload.url, payload.payload);
                    console.log(data)
                    const token = data.data.access_token
                    console.log(token)
                    const t = await axios.post(ACOUNT_URI,{
                        "accessToken" : token
                    })
                    console.log(t)
                } catch (error) {
                    return navigate("/")
                    console.log(error)
                }
            }
            getToken()
        }
    }, [])
    const readBl = async () => {
        let response = await axios.get(
                "/api/blacklist",
                { 
                    withCredentials: true,
                }
            )
        alert(JSON.stringify(response))
     }
    return (
        <>
        <LoginForm/>
        <div>
            <button onClick={readBl}>블랙리스트 가져와</button>
        </div>
        </>
    )
}
export default LoginPage