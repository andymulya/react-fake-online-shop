import { useRef } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthLoginMutation } from "../redux/slices/storeSlice"

export function Login(){
    const [authLogin] = useAuthLoginMutation()
    const navigate = useNavigate()
    const usernameRef = useRef("")
    const passRef = useRef("")

    useEffect(() => {
        usernameRef.current.focus()
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

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={ handleSignIn } className="flex flex-col">
                <label>
                    <span>Username: </span>
                    <input type="text" ref={ usernameRef } placeholder="Username" className="input input-bordered input-info w-full max-w-xs" />
                </label>
                <label>
                    <span>Password: </span>
                    <input type="password" ref={ passRef } placeholder="Password" className="input input-bordered input-info w-full max-w-xs" />
                </label>
                <button className="btn btn-primary w-32">Sign in</button>
            </form>
        </div>
    )
}