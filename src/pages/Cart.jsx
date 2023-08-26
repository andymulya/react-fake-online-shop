import { useNavigate } from "react-router-dom"
import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { useEffect } from "react"
import { getToken } from "../services/localStorage"

export default function Cart(){
    const navigate = useNavigate()

    useEffect(() =>{
        if(!getToken()) navigate('/login')
    }, [])

    return (
        <LayoutNavAndFooter>
            <h1>Halaman Cart</h1>
        </LayoutNavAndFooter>
    )
}