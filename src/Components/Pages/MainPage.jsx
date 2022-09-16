import React, { useState, useEffect, useMemo } from 'react';
import { AppBar,Paper,Toolbar } from '@mui/material'
import UserReviewCard from '../Molecul/UserReviewCard'
if ( window.location != window.parent.location) {
    // you're in an iframe
    console.log("?ddsfaslijl")
  }
const MainPage = ()=>{
    const [tlolUser, setTlolUser] = useState({})
    const [userName, setUserName] = useState("")
    useEffect(() => {
        console.log("?")
        const getTlolUserDate = async ()=>{
            try {
                const userDataRes = await fetch("/api/search/one/"+userName)
                const hashtagsRes = await fetch("/api/blacklist/best/hashtags/"+userName);
                const hashtagsJson = await hashtagsRes.json()
                const json = await userDataRes.json()
                console.log(json)
                const tlolDto = json.blackListDto;
                const userData = {
                    isInMyTlolList:tlolDto.black,
                    totalBlackCount:tlolDto.totalBlackCount,
                    summonerPuuid:tlolDto.summonerPuuid,
                    hashtags:hashtagsJson.hashtags
                }
                setTlolUser({...userData})
            } catch (error) {
                console.log(error)
            }
        }
        (userName!="")&&getTlolUserDate()
    }, [])
    return(
        <>
            <Paper>
                {userName&&<UserReviewCard trollNickname={userName} {...tlolUser}/>}
                {/* {state&&} */}
            </Paper>
        </>
    )
}

export default MainPage