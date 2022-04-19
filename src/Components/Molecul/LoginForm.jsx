import React, { useState, useRef,useEffect,useCallback} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import KakaoLoginButtonImage from '../atoms/KakaoLoginButton'
import Button from '../atoms/Button'
import {KakaoOAuth} from '../../Config/kakaoAuth'
const InputContainer = styled.div`
    width: 340px;
    margin: 25%;
`

const LoginForm = ()=>{
    const handleClickKakaoLogin = ()=>{
        window.location.href = KakaoOAuth
    }
    return (
        <InputContainer>
            <Button onClick={handleClickKakaoLogin}>
                <KakaoLoginButtonImage/>
            </Button>
        </InputContainer>
    )
}

export default LoginForm