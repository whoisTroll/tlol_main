import React, { useState } from 'react';
import Input from '../atoms/Input';
import Span from '../atoms/Span';
const AddBlackListForm = (props)=>{
    const [form, setForm] = useState({
        trollPuuid:props.data.puuid,
        trollNickname:props.data.nickname,
        review:"",
        hashtags:[]
    })
    const inputRivewRef = useRef()
    const inputHashRef = useRef()
    return (
        <>
        <Span>리뷰</Span>
        <Input id="review"/>
        <Span>해쉬태그추가</Span>
        <Input id="hashtags"/>
        </>
    )
}