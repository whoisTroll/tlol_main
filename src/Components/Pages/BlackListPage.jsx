import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const BlackListPage=()=>{
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) {
            navigate("/")
        }
    }, []);
    return (
        <>
        <div>블랙리스트페이지</div>

        </>

    )
}
export default BlackListPage