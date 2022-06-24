import React, { useState, useEffect } from 'react'

import {Card, CardContent,Button, Chip, List, ListItem, ListItemText, Typography, Modal, Box} from '@mui/material'
import { Delete,Add, AddBox } from '@mui/icons-material'
import AddTlolListForm from './AddTlolListForm';
import axios from 'axios';

const addTlolModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    boxShadow: 24,
  };
const UserReviewCard = ({trollNickname,reviews,review,hashtags,isInMyTlolList, totalBlackCount, summonerPuuid})=>{
    const [modalOpen, setModalOPen] = useState(false);
    const handleModalOpen = ()=>setModalOPen(true)
    const handleModalClose = ()=>setModalOPen(false)
    
    console.log(trollNickname,reviews,review,hashtags,isInMyTlolList, totalBlackCount, summonerPuuid)
    const hashTagItems = hashtags&&hashtags.map((hashTag)=><Chip key={hashTag} color="primary" variant="outlined" label={hashTag}/>)
    const reviewsItems = reviews&&reviews.map((review,idx)=><ListItem key={`review-item-${idx}`} divider={true}><ListItemText>{review}</ListItemText></ListItem>)
    const reviewItem = review&&<ListItem><ListItemText>{review}</ListItemText></ListItem>
    return(
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" color={isInMyTlolList&&"red"} component="div">
                        {trollNickname}
                    </Typography>
                    {
                        isInMyTlolList?
                            <Button variant="outlined" startIcon={<Delete />}>트롤리스트에서 제거</Button>
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
                    
                    <Typography variant="body1">트롤 등록 : {totalBlackCount}</Typography>
                    <Typography variant="body1">해시태그</Typography>
                        {hashTagItems}
                    </CardContent>
                    {(reviewsItems||reviewItem)&&<CardContent>
                        <Typography variant="h6" component="div">리뷰</Typography>
                        <List>
                            {reviewsItems||reviewItem}
                        </List>
                    </CardContent>}
            </Card>
    )
    
}

export default UserReviewCard