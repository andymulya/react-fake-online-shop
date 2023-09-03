import { useRef } from "react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthLoginMutation } from "../redux/slices/storeSlice"
import ButtonSolid from "../components/ButtonSolid"
import TextInput from "../components/TextInput"
import { getToken } from "../services/localStorageServices"
import Loading from '../components/Loading'
import LayoutSign from "../layouts/LayoutSign"

export function Login(){
    const [authLogin] = useAuthLoginMutation()
    const navigate = useNavigate()
    const usernameRef = useRef("")
    const passRef = useRef("")

    useEffect(() => {
        if(getToken()) navigate('/')
    }, [])

    const handleSubmitSignIn = (event) => {
        event.preventDefault()
        authLogin({ username: usernameRef.current.value, password: passRef.current.value })
        .unwrap()
        .then((payload) => {
            localStorage.setItem("token", payload.token)
            navigate('/') 
        })
        .catch((error) => console.log(error)) 
    }

    return (getToken()) ?
        <Loading /> :
        <LayoutSign>
            <h1 className="font-semibold text-2xl uppercase">Sing In</h1>
            <form onSubmit={ handleSubmitSignIn } className="flex flex-col gap-5">
                <TextInput refInput={usernameRef} typeInput={"text"} placeholder={"Username"} />
                <TextInput refInput={passRef} typeInput={"password"} placeholder={"Password"} />
                <ButtonSolid style={"bg-[#146C94] hover:bg-cyan-700 text-base-100"}>Login</ButtonSolid>
            </form>
            <Link to={'/register'} className="text-sm font-semibold text-[#146C94] uppercase hover:underline">Sign Up</Link>
        </LayoutSign>
}