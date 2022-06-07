import React, { useState, useRef,useEffect,useCallback} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import KakaoLoginButtonImage from '../atoms/KakaoLoginButton'
import {KakaoOAuth} from '../../Config/kakaoAuth'
import { Button } from '@mui/material'
const InputContainer = styled.div`
    width: 340px;
    margin: 25%;
`

const LoginForm = ()=>{
    const handleClickKakaoLogin = ()=>{
        window.location.href = KakaoOAuth
    }
    return (
        <Button onClick={handleClickKakaoLogin}>
            <KakaoLoginButtonImage/>
        </Button>
    )
}

export default LoginForm