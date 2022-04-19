import React, { useState, useEffect } from 'react'
import MatchHistoryUser from './MatchHistoryUser'

const MatchHistory = ({matchData,userId})=>{
    const reducer = (acc, participant)=>{
        if(!acc.hasOwnProperty(participant.win.toString())){
            acc[participant.win.toString()] = []
        }
        acc[participant.win.toString()].push(participant)
        return acc
    }
    const participants = matchData.participants.reduce(reducer,{})
    return (
        <div>

        <div style={
            {
                border:"1px solid",
                margin:"10px",
            }
        }>
            {participants['true'].map(participant=><MatchHistoryUser user={participant} userId={userId} key={participant.puuid}/>)}
            <div></div>
        </div>
        <div style={
            {
                border:"1px solid",
                margin:"10px",
            }
        }>
            {participants['false'].map(participant=><MatchHistoryUser user={participant} userId={userId} key={participant.puuid}/>)}
            <div></div>
        </div>
        </div>
    )
}
export default MatchHistory