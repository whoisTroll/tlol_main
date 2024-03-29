import { Box, Chip, styled, Typography } from "@mui/material"
import Badge from "../atoms/Badge"
import { Logo, TlolStamp } from "../atoms/Icon"
import TlolCounter from "./TlolCounter"




const TlolCard = ({tlolInfo:{totalBlackCount,black}, hashtags})=>{
    console.log(totalBlackCount,"??")
    
    return (
        <Box sx={{padding:"10px", flex:"0 0  auto"}}>
            <TlolCounter totalBlackCount={totalBlackCount}/>
            {hashtags.map((tag)=><Badge name={tag}/>)}
            <Logo style={{position:"absolute",bottom:"0px",right:"0px"}}/>
        </Box>
    )
}
export default TlolCard