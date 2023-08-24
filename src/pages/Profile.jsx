import { useEffect } from "react";
import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter";
import { useNavigate } from "react-router-dom";
import useSignInStatus from "../hooks/useSignInStatus";

export default function Profile(){

    const isSignIn = useSignInStatus()
    const navigate = useNavigate()

    useEffect(() =>{
        if(!isSignIn) navigate('/login')
    }, [isSignIn])

    return(
        <LayoutNavAndFooter>
            <h1>Halaman Profile</h1>
        </LayoutNavAndFooter>
    )
}