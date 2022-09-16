import { Box, Typography } from "@mui/material"
import { TlolStamp } from "../atoms/Icon"

function TlolCounter({totalBlackCount}) {
    return(

    <Box sx={{display:"flex",flexDirection:"row", alignItems:"center"}}>
    <TlolStamp/>
    <Typography
        fontWeight="500"
        color= "#E1251B"
        paddingLeft="6px"
    >
        트롤 등록 :&nbsp;
    </Typography>
    <Typography color="#E1251B" fontWeight="700">{totalBlackCount}</Typography>
    </Box>
    )
}

export default TlolCounter 