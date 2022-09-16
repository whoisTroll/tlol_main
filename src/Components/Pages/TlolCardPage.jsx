import React, { useState,useEffect,useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import TlolCard from '../Molecul/TlolCard';
function TlolCardPage() {
  const {nickname} = useParams()
  const [isLoding, setIsLoding] = useState(true);
  const [blackListDto, setBlackListDto] = useState({
    totalBlackCount:0,
    black:false
  })
  const [hashtags,setHashtags] = useState([])

  
  useEffect(() => {
    if(""!==nickname){
      const getTlolDto = async ()=>{
        const res = await fetch(`/api/search/one/${nickname}`)
        const json = await res.json()
        console.log(json)
        console.log("나와라", nickname)
        setBlackListDto(json.blackListDto)
      }
      getTlolDto()
    }
  }, [])
  useLayoutEffect(() => {

    const getHashtags = async ()=>{
      const res = await fetch(`/api/blacklist/best/hashtags/${nickname}?size=5`)
      const json = await res.json()
      setHashtags(json.hashtags)
      setIsLoding(false)
    }
    getHashtags()
  }, [blackListDto])
  // window.addEventListener("message", receiveMassege, false)
  if(isLoding){
    return (
      <div>로딩중</div>
    )
  }
  return (
    <div className="App">
      <TlolCard tlolInfo={blackListDto} hashtags={hashtags}/>
    </div>
  );
}

export default TlolCardPage;
