import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {useSearchParams,useNavigate, Link} from 'react-router-dom'

import LoginForm from '../Molecul/LoginForm'

import {getKakaoTokenApiParam} from '../../Config/kakaoAuth'
import {ACOUNT_URI} from '../../Config/Urls'
import styled from 'styled-components'

const UesrReviewContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const UserReviewCard = ({userName,reviews,hashTags})=>{
    return(
        <UesrReviewContainer>
            {userName}<br></br>
            {reviews}<br></br>
            {hashTags}<br></br>
        </UesrReviewContainer>
    )
    
}

const LoginPage=()=>{
    const [searchParams] = useSearchParams()
    const [islogin, setislogin] = useState(true);
    
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
                    const t = await axios.post("https://tlol.me/api/account/user/login",{
                        "accessToken" : token
                    })
                    console.log(t)
                } catch (error) {
                    return navigate("/")
                }
            }
            getToken()
        }
    }, [])
    const readBl = async () => {
        let response = await axios.get(
                "https://tlol.me/api/blacklist"
            )
        alert(JSON.stringify(response))
     }
    return (
        <>
        <UserReviewCard userName="초원범" reviews={["레드훔쳐먹고 튐","개잘함", "ㅈㄴ잘함"]} hashTags={["#좀함", "#존나잘함"]}/>
        <LoginForm/>
        </>
    )
}
export default LoginPage