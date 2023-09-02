import { useRef } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthLoginMutation } from "../redux/slices/storeSlice"
import ButtonSolid from "../components/ButtonSolid"
import ButtonOutline from "../components/ButtonOutline"
import TextInput from "../components/TextInput"
import { getToken } from "../services/localStorageServices"
import Loading from '../components/Loading'

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

    const handleSignUp = () => navigate('/register')

    return (getToken()) ?
        <Loading /> :
        <div>
            <h1>Login</h1>
            <form onSubmit={ handleSubmitSignIn } className="flex flex-col">
                <TextInput refInput={usernameRef} typeInput={"text"} placeholder={"Username"} />
                <TextInput refInput={passRef} typeInput={"password"} placeholder={"Password"} />
                <ButtonSolid style={"bg-cyan-500 hover:bg-cyan-600"}>Login</ButtonSolid>
            </form>
            <ButtonOutline handleClick={handleSignUp}>
                <span>Register</span>
            </ButtonOutline>
        </div> 
    
}