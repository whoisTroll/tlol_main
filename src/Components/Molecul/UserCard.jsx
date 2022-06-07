import {Card, CardContent, Chip, List, ListItem, ListItemText, Typography} from '@mui/material'


const UserReviewCard = ({userName,reviews,review,hashtags})=>{
    console.log(hashTags)
    const hashTagItems = hashTags.map((hashTag)=><Chip key={hashTag} color="primary" variant="outlined" label={hashTag}/>)
    const reviewsItems = reviews&&reviews.map((review,idx)=><ListItem key={`review-item-${idx}`} divider={true}><ListItemText>{review}</ListItemText></ListItem>)
    const reviewItem = review&&<ListItem divider={true}><ListItemText>{review}</ListItemText></ListItem>
    return(
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="div">{userName}</Typography>
                    <Typography>트롤 등록 : 10회</Typography>
                        {hashTagItems}
                    </CardContent>
                    <CardContent>
                        <Typography variant="h6" component="div">리뷰</Typography>
                        <List>
                            {reviewsItems||reviewItem}
                        </List>
                </CardContent>
            </Card>
    )
    
}

export default UserReviewCard