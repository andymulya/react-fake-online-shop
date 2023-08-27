import { useEffect, useRef } from "react"
import TextInput from "../components/TextInput"
import { usePostUserMutation } from "../redux/slices/storeSlice"
import ButtonSolid from "../components/ButtonSolid"
import { getToken } from "../services/localStorageServices"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../components/Loading"

export function Register(){
    const [postUser] = usePostUserMutation()
    const navigate = useNavigate()

    const usernameRef = useRef("")
    const passwordRef = useRef("")
    const firstNameRef = useRef("")
    const lastNameRef = useRef("")
    const emailRef = useRef("")
    const cityRef = useRef("")
    const streetRef = useRef("")
    const zipCodeRef = useRef("")
    const phoneRef = useRef(0)

    const payload = {
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        name: {
            firstname: firstNameRef.current.value,
            lastname: lastNameRef.current.value
        },
        address: {
            city: cityRef.current.value,
            street: streetRef.current.value,
            number: 0,
            zipcode: zipCodeRef.current.value,
            geolocation: {
                lat: '',
                long: ''
            }
        },
        phone: phoneRef.current.value
    }

    const handleSubmitSignUp = (event) => {
        event.preventDefault()
        postUser(payload)
        .unwrap()
        .then((payload) => {
            console.log(payload)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        if(getToken()) navigate('/login')
    }, [])

    return (getToken()) ?
        <Loading /> :
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmitSignUp} className="flex flex-col">
                <TextInput refInput={usernameRef} typeInput={"text"} placeholder={"Username"} />
                <TextInput refInput={passwordRef} typeInput={"password"} placeholder={"Password"} />
                <TextInput refInput={firstNameRef} typeInput={"text"} placeholder={"First Name"} />
                <TextInput refInput={lastNameRef} typeInput={"text"} placeholder={"Last Name"} />
                <TextInput refInput={emailRef} typeInput={"email"} placeholder={"Email"} />
                <TextInput refInput={cityRef} typeInput={"text"} placeholder={"City"} />
                <TextInput refInput={streetRef} typeInput={"text"} placeholder={"Street"} />
                <TextInput refInput={zipCodeRef} typeInput={"number"} placeholder={"Zip Code"} />
                <TextInput refInput={phoneRef} typeInput={"text"} placeholder={"Phone"} />
                <ButtonSolid nameButton={"Sign Up"} />
            </form>
            <Link to={'/login'}>You have an account?</Link>
        </div>
}