import React, { useState, useEffect } from 'react'

import {Card, CardContent,Button, Chip, List, ListItem, ListItemText, Typography} from '@mui/material'
import { Delete } from '@mui/icons-material'


const UserReviewCard = ({userData})=>{
    const {trollNickname,reviews,review,hashtags,isInMyTlolList, totalBlackCount} = userData
    
    console.log(trollNickname,reviews,review,hashtags,isInMyTlolList, totalBlackCount)
    const hashTagItems = hashtags&&hashtags.map((hashTag)=><Chip key={hashTag} color="primary" variant="outlined" label={hashTag}/>)
    const reviewsItems = reviews&&reviews.map((review,idx)=><ListItem key={`review-item-${idx}`} divider={true}><ListItemText>{review}</ListItemText></ListItem>)
    const reviewItem = review&&<ListItem><ListItemText>{review}</ListItemText></ListItem>
    return(
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" color={isInMyTlolList&&"red"} component="div">
                        {trollNickname}
                    </Typography>
                    <Typography>트롤 등록 : {totalBlackCount}</Typography>
                        {hashTagItems}
                    </CardContent>
                    {isInMyTlolList&&<Button startIcon={<Delete />}>트롤리스트에서 제거</Button>}
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