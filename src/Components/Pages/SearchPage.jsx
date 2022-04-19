import React, { useState, useEffect } from 'react';
import UserSearchForm from '../Molecul/UserSeachForm';
import UserCard from '../Molecul/UserCard'

const isEmptyObject = (obj)=>{
    return Object.keys(obj).length === 0;
}

const SearchPage = ()=>{
    const [userData, setUserData] = useState({})
    useEffect(() => {
        console.log(userData)
    }, [userData])
    return(
        <>
        <div>검색페이지</div>
        <UserSearchForm setUserData={setUserData}/>
        {isEmptyObject(userData)?
        "유저를 검색하거라":<UserCard userData={userData}/>
        }
        </>
    )
}
export default SearchPage