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
    const [userData, setUserData] = useState({})
    useEffect(() => {
        console.log(userData,"???")
    }, [userData])
    return(
        <>
        {
            isEmptyObject(searchUserData)?"유저를 검색해 주세요":<UserReviewCard {...searchUserData}/>
        }
        </>
    )
}
export default SearchPage