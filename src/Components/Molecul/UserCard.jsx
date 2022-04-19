import React, { useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Span from '../atoms/Span'
import BlackListForm from './BlackListForm'
import MatchHistory from './MatchHistory'
const checkQtype=(userGameDto)=>{
    return userGameDto.filter((obj)=>{
        return obj['queueType']=="RANKED_SOLO_5x5"
    })[0]
}
const CardContainer = styled.div`
`
const UserCard = ({userData})=>{
    const [userGameDto, setUserGameDto] = useState(checkQtype(userData.userGameDto));
    const [blackListFormVisible, setblackListFormVisible] = useState(false)
    useEffect(() => {
        setUserGameDto(checkQtype(userData.userGameDto));
    }, [userData]);
    const cardRef = useRef();
    const handleAddBlackListButtonClick = ()=>{
        setblackListFormVisible(!blackListFormVisible)
    }
    return (
        <CardContainer ref={cardRef} id={userData.userDto.puuid}>
        <Span>유저아이디 : {userData.userDto.name} </Span>
        {
            userGameDto?
            <><Span>티어 : {userGameDto.tier} {userGameDto.rank} </Span>
            <Span>점수 : {userGameDto.leaguePoints}</Span></>:<p>'렝겜안한 이청길입니다.'</p>
        }
        <Span>블랙리스트 여부 {userData.blackListDto.black ? "O":"X"} </Span>
        <Span>블랙리스트 추가한 사람 수 : {userData.blackListDto.totalBlackCount} </Span>
        {userData.blackListDto.black?"":<Button onClick={handleAddBlackListButtonClick}>블랙리스트 추가</Button>}
        {blackListFormVisible?<BlackListForm/>:""}
        {userData.matchHistory.map((matchData)=><MatchHistory key={matchData.info.gameId} matchData={matchData.info} userId={userData.userDto.puuid}/>)}
        </CardContainer>

    )
}
export default UserCard