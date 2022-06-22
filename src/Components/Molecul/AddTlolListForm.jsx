import React, { useState, useEffect,useRef } from 'react';
import Input from '../atoms/Input'
import Span from '../atoms/Span'
import {Card, CardContent, Button,FormControl,TextField, Typography} from '@mui/material'

const AddTlolListForm = ({trollNickname,summonerPuuid})=>{
    return(
        <Card variant="outlined" fullWidth={true}>
            <CardContent fullWidth={true}>
                <FormControl fullWidth={true}>
                    <Typography variant="h6" component="div">{trollNickname}</Typography>
                    위 유저를 트롤로 기록합니다
                    <br/>
                    <br/>
                    <TextField id="outlined-basic" color="primary" focused label="리뷰" variant="outlined" />
                    <br/>
                    <TextField id="outlined-basic" color="primary" focused label="태그" variant="outlined" />
                </FormControl>
                <Button variant="contained">트롤 추가</Button>
            </CardContent>
        </Card>
        
    )
}
export default AddTlolListForm