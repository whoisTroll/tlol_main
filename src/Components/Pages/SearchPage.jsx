import React, { useState, useEffect } from 'react';
import UserReviewCard from '../Molecul/UserReviewCard';
import UserSearchForm from '../Molecul/UserSeachForm';

const isEmptyObject = (obj)=>{
    return Object.keys(obj).length === 0;
}

const SearchPage = ()=>{
    const [userData, setUserData] = useState({})
    const handleUserData = (userData)=>{
        setUserData(userData)
    }
    useEffect(() => {
        console.log(userData,"???")
    }, [userData])
    return(
        <>
            <br/>
            <br/>
        <UserSearchForm handleUserData={handleUserData}/>
        <br/>
        {/* <UserReviewCard trollNickname={"깡뚜맞"} reviews={["레드훔쳐먹고 튐","개잘함", "ㅈㄴ잘함"]} hashtags={["#좀함", "#존나잘함"]} isInMyTlolList={true}/> */}
        {
            isEmptyObject(userData)?"유저를 검색해 주세요":<UserReviewCard userData={userData}/>
        }
        </>
    )
}
export default SearchPage