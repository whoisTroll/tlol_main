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
        const userName = userNameInputRef.current.value
        console.log(userNameInputRef.current.value)
        if (userName.trim()){
            try {
                setisLoding(true)

                const userDataRes = await axios.get("https://tlol.me/api/search/one/"+userName)
                const tlolDto = userDataRes.data.blackListDto
                const summonerPuuid = userDataRes.data.summonerPuuid
                const hashtagsRes = axios.get("/api/blacklist/best/hashtags/"+userName);
                const reviewsRes = axios.get("/api/blacklist/detail/reviews/"+userName);
                const [hashtags, reviews] = (await Promise.all([hashtagsRes,reviewsRes])).map((res)=>res.data)
                console.log(hashtags, reviews, tlolDto)
        {/* <UserReviewCard trollNickname={"깡뚜맞"} reviews={["레드훔쳐먹고 튐","개잘함", "ㅈㄴ잘함"]} hashtags={["#좀함", "#존나잘함"]} isInMyTlolList={true}/> */}

                const userData = {
                    trollNickname:userName,
                    reviews:reviews.reviews,
                    hashtags:hashtags.hashtags,
                    isInMyTlolList:tlolDto.black,
                    totalBlackCount:tlolDto.totalBlackCount,
                    summonerPuuid:summonerPuuid
                }
                props.handleUserData(userData)
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