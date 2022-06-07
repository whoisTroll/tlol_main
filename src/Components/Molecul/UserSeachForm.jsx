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
    //나중에 recoil로 뺄거임
    const handleOnClickSearchButton = async ()=>{
        const userName = userNameInputRef.current.value
        console.log(userNameInputRef.current.value)
        if (userName.trim()){
            setisLoding(true)
            const hashtags = axios.get("https://tlol.me/api/blacklist/best/hashtags/"+userName);
            const reviews = axios.get("https://tlol.me/api/blacklist/detail/reviews/"+userName);
            const result = await Promise.all([hashtags,reviews])
            console.log(result)
            
            
        }
        else{
            alert("입력 제대로해라")
        }

    }
    return (
        <UserSearchContainer>
            <TextField  label="유저이름" inputRef={userNameInputRef} fullWidth/>
            <Button  variant="contained" onClick={handleOnClickSearchButton} disabled={isLoding}>{isLoding ?"로딩중":"검색"}</Button>
        </UserSearchContainer>
    )
}

export default UserSearchForm