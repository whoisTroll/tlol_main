import axios from 'axios';
import React, { useState, useEffect,useRef } from 'react';
import styled from 'styled-components';

import {USER_SEARCH} from '../../Config/Urls'

import Button from '../atoms/Button';
import Input from '../atoms/Input'
import Span from '../atoms/Span';
const UserSearchContainer = styled.div``
const UserSearchForm = (props)=>{
    const [isLoding, setisLoding] = useState(false)
    const userNameInputRef = useRef()
    const handleonClickSearchButton = ()=>{
        const userName = userNameInputRef.current.value
        if (userName.trim()){
            setisLoding(true)
            axios.get(USER_SEARCH+`${userName}`).
            then((data)=>{
                setisLoding(false)
                props.setUserData(data.data)
                console.log(data)
            }).catch((err)=>{
                setisLoding(false)
                if(err.response.status){
                    alert("존재하지 않는 유저입니다.")
                    props.setUserData({})
                }
                else{
                    alert("에러")
                }
            })
            
        }
        else{
            alert("입력 제대로해라")
        }
    }
    return (
        <UserSearchContainer>
        <Span>유저검색</Span>
        <Input ref={userNameInputRef}/>
        <Button onClick={handleonClickSearchButton} disabled={isLoding}>{isLoding ?"로딩중":"검색"}</Button>
        </UserSearchContainer>
    )
}

export default UserSearchForm