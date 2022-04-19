import React, { useState } from 'react'

const MatchHistoryUser = ({user,userId})=>{
    const isMe = userId==user.puuid
    return(
        <div>
            <b>{isMe?'v':''}{user.summonerName}</b>
            <p>킬:{user.kill} 데스:{user.deaths} 어시:{user.assists}</p>
        </div>
    )
}
export default MatchHistoryUser