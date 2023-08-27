import { useNavigate } from "react-router-dom"
import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { useEffect } from "react"
import { getToken } from "../services/localStorageServices"

export default function Settings(){
    const navigate = useNavigate()

    useEffect(() => {
        if(!getToken()) navigate('/login')
    }, [])

    return (
        <LayoutNavAndFooter>
            <h1>Halaman Settings</h1>
        </LayoutNavAndFooter>
    )
}