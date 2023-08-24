import { useNavigate } from "react-router-dom"
import useSignInStatus from "../hooks/useSignInStatus"
import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { useEffect } from "react"

export default function Cart(){

    const isSignIn = useSignInStatus()
    const navigate = useNavigate()

    useEffect(() =>{
        if(!isSignIn) navigate('/login')
    }, [isSignIn])

    return (
        <LayoutNavAndFooter>
            <h1>Halaman Cart</h1>
        </LayoutNavAndFooter>
    )
}