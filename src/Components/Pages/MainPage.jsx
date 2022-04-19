import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const MainContainer = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
`

const MainPage = ()=>{
    return(
        <MainContainer>
            <Link style={{
                flex: 1
            }} to="/blacklist">내 블랙리스트</Link>
            <Link style={{
                flex: 1
            }} to='/search'>전적 조회하기</Link>
        </MainContainer>
    )
}

export default MainPage