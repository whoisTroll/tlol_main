import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
// import { tlolList } from '../../Config/Dummy';
import UserReviewCard from '../Molecul/UserReviewCard';

const TlolListPage=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [tlolList, setTlolList] = useState([])
    useEffect(() => {
        const getTlolList = async()=>{
            const res = await fetch("/api/blacklist")
            const json = await res.json()
            const tlolListData = json.blacklist;
            setTlolList(tlolListData)
        }
        getTlolList()
    }, []);
    console.log(tlolList)
    const tlolCards = tlolList.map((data)=><UserReviewCard key={data.trollPuuid} isInMyTlolList={true} {...data}/>)
    return (
        <>
            <div>블랙리스트페이지</div>
            {tlolCards}
        </>

    )
}
export default TlolListPage