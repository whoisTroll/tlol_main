import React, { useState, useEffect,useRef } from 'react';
import Input from '../atoms/Input'
import Span from '../atoms/Span'
import {Card, CardContent, Button,FormControl,TextField, Typography, Chip} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTlolListForm = ({trollNickname,summonerPuuid})=>{
    const [review,setReview] = useState("");
    const [hashTag, setHashTag] = useState("");
    const [hashTags, setHashTags] = useState(()=>new Set());
    const navigate = useNavigate();
    const addTlolReq = async ()=>{
        // const parseHash = ()=>{
        //     hashTags.split(" ")
        // }
        await fetch("/api/blacklist",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {trollPuuid:summonerPuuid,
                trollNickname:trollNickname,
                review:review,
                hashTags:hashTags})
        })
    }
    const handleOnChange = (e)=>{
        const inputValue = e.target.value
        if(inputValue[inputValue.length-1]==" "){
            setHashTags((prevHash)=>new Set([...prevHash,(inputValue.includes("#")?"":"#")+inputValue.trim()]))
            setHashTag("")
        }else{
            setHashTag(inputValue)
        }
    }
    const handleKeyPress = (e)=>{
        if(e.keyCode == 13){
            const inputValue = e.target.value
            console.log(inputValue)
            if(inputValue!=""){
                setHashTags((prevHash)=>new Set([...prevHash,(inputValue.includes("#")?"":"#")+inputValue.trim()]))
                setHashTag("")
            }
        }
    }
    useEffect(()=>{console.log(hashTags)},[hashTags])
    console.log(hashTags.size)
    //나중에 클릭하면 사라지게
    const tagList = hashTags.size!=0?new Array(...hashTags).map((tag)=>(<Chip key={tag} color="primary" variant="outlined" label={tag}/>)):""
    return(
        <Card variant="outlined">
            <CardContent>
                <FormControl fullWidth>
                    <Typography variant="h6" component="div">{trollNickname}</Typography>
                    위 유저를 트롤로 기록합니다
                    <br/>
                    <br/>
                    <TextField color="primary" onChange={(e)=>setReview(e.target.value)} value={review} focused label="리뷰" variant="outlined" />
                    <br/>
                    <div>
                        태그
                        {tagList}
                    </div>
                    <br/>

                    <TextField color="primary" onChange={handleOnChange} onKeyDown={handleKeyPress} value={hashTag} focused label="태그" variant="outlined" />
                </FormControl>
                <Button variant="contained" onClick={addTlolReq}>트롤 추가</Button>
            </CardContent>
        </Card>
        
    )
}
export default AddTlolListForm