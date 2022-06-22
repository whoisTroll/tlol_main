import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios'

import styled from 'styled-components'

import {getKakaoTokenApiParam} from '../../Config/kakaoAuth'

import {Link,useNavigate,useSearchParams} from 'react-router-dom'
import { AppBar,Paper,Toolbar } from '@mui/material'
import UserReviewCard from '../Molecul/UserReviewCard'
const MainContainer = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
`

const MainPage = ()=>{
    const [tlolUser, setTlolUser] = useState(false)
    const [userName, setUserName] = useState("")
    useEffect(() => {

        const getTlolUserDate = async ()=>{
            try {
                const data = await axios.get("https://tlol.me/api/search/one/"+userName)
                const json = data.data.blackListDto
                console.log(json)
                setTlolUser(json)
            } catch (error) {
                console.log(error)
            }
        }
        (userName!="")&&getTlolUserDate()
    }, [])
    return(
        <>
        <Paper>
            {tlolUser&&<UserReviewCard trollNickname={userName} {...tlolUser}/>}
            {/* {state&&} */}
        </Paper>
        </>
    )
}

export default MainPage