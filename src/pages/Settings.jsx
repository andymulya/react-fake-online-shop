import { useNavigate } from "react-router-dom"
import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { useEffect } from "react"
import { getToken } from "../services/localStorageServices"
import ButtonBack from "../components/ButtonBack"

export default function Settings(){
    const navigate = useNavigate()

    useEffect(() => {
        if(!getToken()) navigate('/login')
    }, [])

    return (
        <LayoutNavAndFooter>
            <ButtonBack />
            <h1>Halaman Settings</h1>
        </LayoutNavAndFooter>
    )
}