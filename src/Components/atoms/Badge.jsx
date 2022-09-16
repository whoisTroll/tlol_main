import { Chip } from "@mui/material"


function Badge(props) {
    return(
        <Chip variant="outlined" sx={{fontWeight:"400",boxSizing:"border-box",fontSize:"14px",color:"#121314", borderColor:"#D7D5D5", borderStyle:"solid", borderWidth:"1px",height: "34px"}} label={props.name}/>

    )
}

export default Badge