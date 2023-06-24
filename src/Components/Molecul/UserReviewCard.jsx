import React, { useState, useEffect } from 'react'
import Badge from '../atoms/Badge'

import {Card, CardContent,Button, Chip, List, ListItem, ListItemText, Typography, Modal, Box} from '@mui/material'
import { Add, AddBox } from '@mui/icons-material'
import AddTlolListForm from './AddTlolListForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TlolCounter from './TlolCounter';
import styled from '@emotion/styled';
import { Delete } from '../atoms/Icon';

const addTlolModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    boxShadow: 24,
  };

const UserNameText = styled.span`
    font-size:24px;
    font-weight: 700;
`
const CardHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const DeleteButton = styled.button`
    width:30px;
    height:30px;
    background-color: #FFFFFF;
    border:solid 1px #989898;
    border-radius: 10px;
    padding: 0px;
    cursor: pointer;
    
`
const UserReviewCard =
 ({getTlolList, trollNickname,reviews,review,hashtags,isInMyTlolList, totalBlackCount, summonerPuuid, blPk})=>{
    const [modalOpen, setModalOPen] = useState(false);
    const handleModalOpen = ()=>setModalOPen(true)
    const handleModalClose = ()=>setModalOPen(false)
    const navigate = useNavigate()
    console.log(blPk)
    const handleDeleteButton = (e)=>{
        console.log(e,blPk)
        if(blPk){
            fetch("/api/blacklist/"+blPk,{
                method:"DELETE"
            }).then((res)=>{
                console.log(res)
                if(res.status==200){
                    // navigate("/tlollist");
                    getTlolList().then(
                        // navigate("/tlollist")
                    )
                }else{
                    alert("다시 시도해주세요!");
                }

            })
        }else{
            // navigate("/tlollist");
        }

    }
    console.log(trollNickname,reviews,review,hashtags,isInMyTlolList, totalBlackCount, summonerPuuid)
    const hashTagItems = hashtags&&hashtags.map((hashTag)=><Badge key={hashTag} color="primary" variant="outlined" name={hashTag}/>)
    const reviewsItems = reviews&&reviews.map((review,idx)=><ListItem key={`review-item-${idx}`} divider={true}><ListItemText>{review}</ListItemText></ListItem>)
    const reviewItem = review&&<ListItem><ListItemText>{review}</ListItemText></ListItem>
    console.log(totalBlackCount,"??")
    return(
            <Card sx={{
                background: "#FFFFFF",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                border:"0px",
                borderRadius: "16px",
                margin: "16px 22px",
            }} variant="outlined">
                <CardContent>
                    <CardHeaderContainer>
                        <UserNameText >
                            {trollNickname}
                            
                        </UserNameText>
                        {isInMyTlolList?
                            <DeleteButton onClick={handleDeleteButton}><Delete/></DeleteButton>
                                :
                            (
                                <>
                                    <Button onClick={handleModalOpen} variant="outlined" startIcon={<AddBox/>}>트롤리스트 추가</Button>
                                    <Modal open={modalOpen} onClose={handleModalClose}>
                                        <Box sx={addTlolModalStyle}>
                                            <AddTlolListForm trollNickname={trollNickname} summonerPuuid={summonerPuuid}/>
                                        </Box>
                                    </Modal>
                                </>
                            )}
                    </CardHeaderContainer>
                    {totalBlackCount&&<TlolCounter/>}
                    
                    {(reviewsItems||reviewItem)&&
                    <>
                        <Typography component="div" fontSize="14px" fontWeight="700">리뷰</Typography>
                        <List>
                            {reviewsItems||reviewItem}
                        </List>
                    </>    
                    }
                    <Box>
                        {hashTagItems}
                    </Box>
                    </CardContent>
            </Card>
    )
    
}

export default UserReviewCard