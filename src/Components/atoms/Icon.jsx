

import {ReactComponent as HomeSvgComponent} from "../../assets/home.svg";
import {ReactComponent as SearchSvgComponent} from "../../assets/search.svg";
import {ReactComponent as ListSvgComponent} from "../../assets/list.svg";
import {ReactComponent as LogoSvgComponent} from "../../assets/Logo-main.svg"
import {ReactComponent as TlolStampComponent} from "../../assets/tlol-stamp.svg"

import { Icon, styled } from "@mui/material";

const ExSvgComponent = (props) => {
    const Svg = styled(props.component)`
        width:100%;
        height: 25px;
        circle{
            stroke: ${props=>props.selected?"#E1251B":"#999898"};
        }
        path{
            stroke: ${props=>props.selected?"#E1251B":"#999898"};
        }
    `
    return (
        <Icon sx={{width:"25px", height:"29px"}}>
            <Svg selected={props.selected}/>
        </Icon>

    )
}

function Home(props) {
    console.log(props.selected)
    return  <ExSvgComponent component={HomeSvgComponent} selected={props.selected}/>

}

function Search(props) {
    return  <ExSvgComponent component={SearchSvgComponent} selected={props.selected}/>
}

function Cancle(props) {

}
function Delete(props) {
    
}
function Logout(props) {
    
}
function Clear(props) {
    
}
function Add(props) {
    
}
function ListIcon(props) {
    return <ExSvgComponent component={ListSvgComponent} selected={props.selected}/>
}
function TlolStamp(props){
    const ExTlolStamp = styled(TlolStampComponent)`
        width: 18px;
        height: 18px;
    `
    return <ExTlolStamp />
}
function Logo(props){
    const ExLogo = styled(LogoSvgComponent)`
        width: 63px;
        height: 26px;
    `
    return <ExLogo sx={props.style}/>
}
export {Home, Add, Clear, Logout, Delete, Cancle, ListIcon, Search, Logo, TlolStamp}