import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useGetUserWithIdQuery } from "../redux/slices/storeSlice"

// untuk mengecek apakah di data api dan data di local storage data user sama?. akan mengembalikan nilai boolean true or false
const checkUserInData = (tokenDecode, data) => {
    return (tokenDecode.sub === data.id && tokenDecode.user === data.username)
}

// untuk mengecek apakah di local storage ada token dari user? kalau ada akan mengebalikan nilai true
const checkTokenInLokalStorage = () => {
    const token = localStorage.getItem('token')

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
    const isToken = checkTokenInLokalStorage()

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