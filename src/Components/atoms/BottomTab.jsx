import styled from "styled-components"

const BottomNav = styled.nav`
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    display:flex;
    justify-items:center; 
    justify-content:space-around;
`

function BottomTab(props) {
    return(
        <BottomNav>
            {props.children}
        </BottomNav>
    )
}
export default BottomTab