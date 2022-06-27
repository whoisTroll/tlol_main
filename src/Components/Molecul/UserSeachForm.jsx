import axios from 'axios';
import React, { useState, useEffect,useRef } from 'react';
import styled from 'styled-components';

import {USER_SEARCH} from '../../Config/Urls'

import {Button,TextField,useFormControl} from '@mui/material'
import Span from '../atoms/Span';
const UserSearchContainer = styled.div`
    display: flex;
`
const UserSearchForm = (props)=>{
    const [isLoding, setisLoding] = useState(false)
    const userNameInputRef = useRef()

    const handleOnClickSearchButton = async ()=>{
        const userName = userNameInputRef.current.value.replace(/\s/g,"")
        console.log(userNameInputRef.current.value)
        console.log(userName)
        if (userName){
            try {
                setisLoding(true)

                const userDataRes = fetch("/api/search/one/"+userName)
                const hashtagsRes = fetch("/api/blacklist/best/hashtags/"+userName);
                const reviewsRes = fetch("/api/blacklist/detail/reviews/"+userName);

                console.log(userName,"????")
                const [userData,hashtags, reviews] =await Promise.all((await Promise.all([userDataRes,hashtagsRes,reviewsRes])).map((res)=>res.json()))
                const tlolDto = userData.blackListDto
                const summonerPuuid = userData.summonerPuuid
                console.log(userData,hashtags, reviews,summonerPuuid,"정보테스트")
                const tlolData = {
                    trollNickname:userName,
                    reviews:reviews.reviews,
                    hashtags:hashtags.hashtags,
                    isInMyTlolList:tlolDto.black,
                    totalBlackCount:tlolDto.totalBlackCount,
                    summonerPuuid:summonerPuuid
                }
                props.handleUserData(tlolData)
            } catch (error) {
                console.log(error)
                alert("잘못된 요청입니다.")
            }
            setisLoding(false)
        }
        else{
            alert("입력 제대로해라")
        }

    }
    return (
        <UserSearchContainer>
            <TextField  label="유저이름" inputRef={userNameInputRef} fullWidth={true}/>
            <Button  variant="contained" onClick={handleOnClickSearchButton} disabled={isLoding}>{isLoding ?"로딩중":"검색"}</Button>
        </UserSearchContainer>
    )
}

export default UserSearchForm