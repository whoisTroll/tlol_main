import React, { useState, useEffect,useRef } from 'react';
import Input from '../atoms/Input'
import Span from '../atoms/Span'
import Button from '../atoms/Button'

const BlackListForm = (props)=>{
    const [blackListData, setBlackListData] = useState({
        "trollPuuid":props.puuid,
        "trollNickname":props.nickname,
        "review":"",
        "hashtags":[] 
    })
    const reviewInputRef = useRef()
    const hashtagsInputRef = useRef()
    return(
    <div>
        <Span>닉네임 : {props.nickname}</Span>
        <Span>리뷰</Span>
        <Input id="review" ref={reviewInputRef}></Input>
        <Span>태그</Span>
        <Input id="hashtags" ref={hashtagsInputRef}></Input>
        <Button>추가</Button>
    </div>
    )
}
export default BlackListForm