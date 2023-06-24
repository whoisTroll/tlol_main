import React, { useState, useEffect,useRef } from 'react';
import Input from '../atoms/Input'
import Span from '../atoms/Span'
import {Card, CardContent, Button,FormControl,TextField, Typography, Chip, Tooltip, Box} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AddCircle, Help, QuestionMark } from '@mui/icons-material';

const AddTlolListForm = ({trollNickname,summonerPuuid})=>{
    const [review,setReview] = useState("");
    const [hashTag, setHashTag] = useState("");
    const [hashTags, setHashTags] = useState(()=>new Set());
    const navigate = useNavigate();
    const addTlolReq = async ()=>{
        console.log(Array(...hashTags))
        console.log({trollPuuid:summonerPuuid,
            trollNickname:trollNickname,
            review:review,
            hashTags:Array(...hashTags)})
        try {
            
        const res = await fetch("/api/blacklist",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {trollPuuid:summonerPuuid,
                    trollNickname:trollNickname,
                    review:review,
                    hashtags:Array(...hashTags)})
            })
            const json = await res.json()
            console.log(json)
            navigate('/tlollist')
        } catch (error) {
            console.error(error)
            alert("추가에 실패했습니다.")
            navigate('/')
        }

    }
    const handleOnChange = (e)=>{
        const inputValue = e.target.value
        if(inputValue[inputValue.length-1]==" "&&inputValue.trim()!=""){
            setHashTags((prevHash)=>new Set([...prevHash,(inputValue.includes("#")?"":"#")+inputValue.trim()]))
            setHashTag("")
        }else{
            setHashTag(inputValue.trim())
        }
    }
    const handleKeyPress = (e)=>{
        if(e.keyCode == 13){
            const inputValue = e.target.value
            if(inputValue!=""){
                setHashTags((prevHash)=>new Set([...prevHash,(inputValue.includes("#")?"":"#")+inputValue.trim()]))
                setHashTag("")
            }
        }
    }
    const handleOnclickTagDelete = (e)=>{
        const newHashTagList = [...hashTags].filter((item)=>item!=e.target.innerText) 
        setHashTags(new Set(newHashTagList))
    }
    //나중에 클릭하면 사라지게
    const tagList = hashTags.size!=0?new Array(...hashTags).map((tag)=>(<Chip color key={tag} sx={{
        background: "#FFECEB",borderRadius: "30px", border:"none",borderRadius: "30px", 
        color:"#E1251B"}} onClick={handleOnclickTagDelete} color="primary" variant="outlined" label={tag}/>)):""
    return(
        <Card sx={{
            borderRadius:"10px",
            height: "15rem",
            padding: "10% 10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",

        }} variant="outlined">
                    <Typography variant="h6" component="div">{trollNickname}</Typography>
                    <Typography fontSize="5px" variant="caption" color="GrayText">위 유저를 트롤로 기록합니다</Typography>
                    <TextField sx={{ div:{ borderRadius:"10px"}}} color="primary" onChange={(e)=>setReview(e.target.value)} value={review} variant="outlined" />
                    <div>
                        <Box>
                            <Typography>
                                태그
                                <Typography fontSize="5px" variant="caption" color="GrayText"> 태그를 누르면 삭제됩니다.</Typography>
                            </Typography>
                        </Box>
                        {tagList}
                    </div>
                    <TextField  sx={{ div:{ borderRadius:"10px"}}} color="primary" placeholder="입력후 엔터 또는 스페이스바" onChange={handleOnChange} onKeyDown={handleKeyPress} value={hashTag} variant="outlined" />
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop:"1rem"
                    }}>


                    <Button sx={{
                        backgroundColor:"#E1251B",
                        borderRadius:"10px",
                        width: "5rem",
                    }} variant="contained" onClick={addTlolReq}>추가</Button>
                    </div>
        </Card>
        
    )
}
export default AddTlolListForm