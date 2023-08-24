import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useGetUserWithIdQuery } from "../redux/slices/storeSlice"

const checkUser = (tokenDecode, data) => {
    return (tokenDecode.sub === data.id && tokenDecode.user === data.username)
}

const checkToken = (token) => {
    if(token){
        const decode = jwtDecode(token)
        const { data, isSuccess } = useGetUserWithIdQuery(decode.sub)
        if(isSuccess){
            return checkUser(decode, data)
        }
    }
}

const useSignInStatus = () => {
    const [isSign, setIsSign] = useState(false)
    const token = localStorage.getItem('token')
    const isToken = checkToken(token)

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