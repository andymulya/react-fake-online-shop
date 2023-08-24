import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useGetUserWithIdQuery } from "../redux/slices/storeSlice"

const checkUserInData = (tokenDecode, data) => {
    return (tokenDecode.sub === data.id && tokenDecode.user === data.username)
}

const checkTokenInLokalStorage = (token) => {
    if(token){
        const decode = jwtDecode(token)
        const { data, isSuccess } = useGetUserWithIdQuery(decode.sub)
        if(isSuccess){
            return checkUserInData(decode, data)
        }
    }
}

const useSignInStatus = () => {
    const [isSign, setIsSign] = useState(false)
    const token = localStorage.getItem('token')
    const isToken = checkTokenInLokalStorage(token)

    useEffect(() => {
        if(isToken){
            setIsSign(true)
        }else{
            setIsSign(false)
        }
    }, [isToken])

    return isSign
}

export default useSignInStatus