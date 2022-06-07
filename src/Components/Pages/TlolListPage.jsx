import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { tlolList } from '../../Config/Dummy';
import UserReviewCard from '../Molecul/UserReviewCard';

const TlolListPage=()=>{
    console.log(tlolList.blacklist)
    useEffect(() => {
        const getTlolList = async()=>{
            const data = await (await axios.get("https://tlol.me/api/blacklist")).data
            console.log(data)
        }
        getTlolList()
    }, []);
    const tlolCards = tlolList.blacklist.map((data)=><UserReviewCard key={data.trollPuuid} {...data}/>)
    return (
        <>
            <div>블랙리스트페이지</div>
            {tlolCards}
        </>

    )
}
export default TlolListPage