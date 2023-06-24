import { Search } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import {useRecoilState} from 'recoil'
import { searchUserDataState, searchUserNameState } from "../../recoil/atoms/atom"
function SearchInput() {
    const [searchUserName,setSearchUserName] = useRecoilState(searchUserNameState)
    const [searchUserData, setSearchUserData] = useRecoilState(searchUserDataState)
    const navigate = useNavigate()
    const handleOnclick = (e)=>{
        const userName = e.target.value
        console.log(userName)
        setSearchUserName(userName)
    }
    const handleOnClickSearchButton = async ()=>{
      const userName = searchUserName.replace(/\s/g,"")
      if (userName){
          try {

              const userDataRes = fetch("/api/search/one/"+userName)
              const hashtagsRes = fetch("/api/blacklist/best/hashtags/"+userName);
              const reviewsRes = fetch("/api/blacklist/detail/reviews/"+userName);

              const [userData,hashtags, reviews] =await Promise.all((await Promise.all([userDataRes,hashtagsRes,reviewsRes])).map((res)=>res.json()))
              const tlolDto = userData.blackListDto
              const summonerPuuid = userData.summonerPuuid
              console.log(userData,hashtags, reviews,summonerPuuid,"정보테스트")
              const tlolData = {
                  trollNickname:userName,
                  reviews:reviews.reviews,
                  hashtags:hashtags.hashtags,
                  isInMyTlolList:tlolDto.black,
                  totalBlackCount:tlolDto.totalBlackCount,
                  summonerPuuid:summonerPuuid
              }
              setSearchUserData(tlolData)
              navigate("/search")
          } catch (error) {
              console.log(error)
              alert("잘못된 요청입니다.")
          }
      }
      else{
          alert("입력 제대로해라")
      }

  }
    const InputProps = { 
      style:{ 
        borderWidth:"0px",
        height:"56px",
        background:"#F8F8F8" , 
        borderRadius:"16px",
        cursor:"pointer",
        
      }, 
      multiline:false,
      endAdornment:(<InputAdornment onClick={handleOnClickSearchButton}><Search/></InputAdornment>)
    }
    const InputStyle = {height:"56px", width:"360px"}
    return (
      <TextField
        value={searchUserName}
        onChange={handleOnclick}
        style={InputStyle} 
        InputProps={InputProps} 
        size="small" 
        placeholder="유저 이름을 입력해주세요"
      />
    )
  }
  
  export default SearchInput