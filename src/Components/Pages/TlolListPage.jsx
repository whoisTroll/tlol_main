import styled from '@emotion/styled';
import axios from 'axios';
import React,{useState,useEffect, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
// import { tlolList } from '../../Config/Dummy';
import UserReviewCard from '../Molecul/UserReviewCard';

const TlolListPage=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [tlolList, setTlolList] = useState([])
    const getTlolList = useCallback(async()=>{
        const res = await fetch("/api/blacklist")
        const json = await res.json()
        const tlolListData = json.blacklist;
        setTlolList(tlolListData)
    })
    useEffect(() => {
        getTlolList()
    }, []);
    const tlolCards = tlolList.map((data)=>{
        data.hashtags = []
        return <UserReviewCard getTlolList={getTlolList} key={data.trollPuuid} isInMyTlolList={true} {...data}/>
    })
    return (
        <>
            {tlolCards}
        </>

    )
}
export default TlolListPage