import { useRef } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthLoginMutation } from "../redux/slices/storeSlice"
import useSignInStatus from "../hooks/useSignInStatus"
import CustomButton from "../components/CustomButtom"
import TextInput from "../components/TextInput"

export function Login(){
    const [authLogin] = useAuthLoginMutation()
    const isSignIn = useSignInStatus()

    const navigate = useNavigate()

    const usernameRef = useRef("")
    const passRef = useRef("")

    useEffect(() => {
        if(isSignIn) navigate('/')
        usernameRef.current.focus()
    }, [isSignIn])

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

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={ handleSignIn } className="flex flex-col">
                <TextInput refInput={usernameRef} typeInput={"text"} placeholder={"Username"} />
                <TextInput refInput={passRef} typeInput={"password"} placeholder={"Password"} />
                <CustomButton nameButton={"Sign In"} />
            </form>
        </div>
    )
}