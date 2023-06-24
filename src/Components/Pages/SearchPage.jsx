import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import UserReviewCard from '../Molecul/UserReviewCard';
import UserSearchForm from '../Molecul/UserSeachForm';
import {searchUserDataState, searchUserNameState} from '../../recoil/atoms/atom'

const isEmptyObject = (obj)=>{
    return Object.keys(obj).length === 0;
}

const SearchPage = ()=>{
    const [searchUserName, setSearchUserName] = useRecoilState(searchUserNameState)
    const [searchUserData, setSearchUserData] = useRecoilState(searchUserDataState)
    useEffect(() => {
        const userName = searchUserName.replace(/\s/g,"")
        const setData = async ()=>{
            if (userName){
                try {
                    const userDataRes = fetch("/api/search/one/"+userName)
                    const hashtagsRes = fetch("/api/blacklist/best/hashtags/"+userName);
                    const reviewsRes = fetch("/api/blacklist/detail/reviews/"+userName);
                    
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
                    setSearchUserData(tlolData)
                } catch (error) {
                }
            }
        }
        setData()
    }, [])
    return(
        <>
        {
            isEmptyObject(searchUserData)?"유저를 검색해 주세요":<UserReviewCard {...searchUserData}/>
        }
        </>
    )
}
export default SearchPage