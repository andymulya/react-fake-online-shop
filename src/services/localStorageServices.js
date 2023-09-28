import jwtDecode from "jwt-decode"

export const getToken = () => {
    const token = localStorage.getItem('token')
    try{
        if(token) return jwtDecode(token)
    }catch(e){
        localStorage.removeItem('token')
        console.error(e.message)
    }
}