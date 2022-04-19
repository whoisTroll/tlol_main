import qs from 'qs'
export const REST_API_KEY = `949d8754dd375aee4eb30a85026f02e0`
export const REDIRECT_URI = `https://localhost:3000/`
export const getKakaoTokenApiParam = (code)=>{
    return {
        url:`https://kauth.kakao.com/oauth/token`,
        payload:qs.stringify({
                "Content-Type": "application/x-www-form-urlencoded",
                "grant_type":"authorization_code",
                "client_id": REST_API_KEY,
                "redirect_uri": REDIRECT_URI,
                "code":code,
        })
    }
}

export const KakaoOAuth = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
