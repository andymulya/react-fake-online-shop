import { useRef } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthLoginMutation } from "../redux/slices/storeSlice"
import ButtonSolid from "../components/ButtonSolid"
import TextInput from "../components/TextInput"
import { getToken } from "../services/localStorage"
import Loading from '../components/Loading'

export function Login(){
    const [authLogin] = useAuthLoginMutation()
    const navigate = useNavigate()
    const usernameRef = useRef("")
    const passRef = useRef("")

    useEffect(() => {
        if(getToken()) navigate('/')
    }, [])

    const handleSignIn = (event) => {
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
    <div>
        <h1>Login</h1>
        <form onSubmit={ handleSignIn } className="flex flex-col">
            <TextInput refInput={usernameRef} typeInput={"text"} placeholder={"Username"} />
            <TextInput refInput={passRef} typeInput={"password"} placeholder={"Password"} />
            <ButtonSolid nameButton={"Sign In"} />
        </form>
    </div> 
    
}