import React, { useState, useRef } from 'react'

import Input from '../atoms/Input'
import Span from '../atoms/Span';
import styled from 'styled-components'

const InputContainer = styled.div`
    width: 50%;
    margin: 25%;
`

const IdInput = ()=>{
    const [userId, setUserId] = useState('')
    const idRef = useRef()
    return (
        <>
        <Span>이메일 입력</Span>
        <Input ref={idRef}/>
        </>
    )
}


const PwInput = () =>{
    const [userPw, setUserPw] = useState('')
    const pwRef = useRef()
    return (
        <>
        <Span>비밀번호</Span>
        <Input ref={pwRef}type="password"/>
        </>
    )
}

const PwCheckInput = () =>{
    const pwRef = useRef()
    return (
        <>
        <Span>비밀번호 확인</Span>
        <Input ref={pwRef}type="password"/>
        </>
    )
}

const NickNameInput = () =>{
    const nickNameRef = useRef()
    return (
        <>
        <Span>닉네임 입력</Span>
        <Input ref={nickNameRef}/>
        </>
    )
}
const SigninForm = ()=>{
    return (
        <InputContainer>
            <IdInput/>
            <PwInput/>
            <PwCheckInput/>
            <NickNameInput/>
        </InputContainer>
    )
}

export default SigninForm