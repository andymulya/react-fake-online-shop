import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { getToken } from "../services/localStorage"
import { useGetUserWithIdQuery } from "../redux/slices/storeSlice"
import Loading from '../components/Loading'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import ProfileComponent from "../components/profile/ProfileComponent"
import InfoUserComponent from "../components/profile/InfoUserComponent"
import Title from '../components/Title'

export default function Profile(){
    const userId = getToken().sub
    const navigate = useNavigate()
    const { data, isLoading } = useGetUserWithIdQuery(userId)
    const { username, firstname, lastname, email, phone, city, street, zipcode } = data
    
    useEffect(() => {
        if(!userId) navigate('/login')
    }, [])
    
    return(
        <LayoutNavAndFooter>
            <div>
                <Title nameTitle={"Profile"}/>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a id vero iusto nostrum veritatis autem.</p>
            </div>

            {
                (isLoading) ?
                <Loading /> :
                <ProfileComponent>
                    <ProfileComponent.Head title={ `${firstname} ${lastname}` } />
                    <ProfileComponent.Body>
                        
                        <InfoUserComponent label={"Username"} value={ username } />
                        <InfoUserComponent label={"First Name"} value={ firstname } />
                        <InfoUserComponent label={"Last Name"} value={ lastname } />
                        <InfoUserComponent label={"Email"} value={ email } />
                        <InfoUserComponent label={"Phone"} value={ phone } />
                        <InfoUserComponent label={"City"} value={ city } />
                        <InfoUserComponent label={"Street"} value={ street } />
                        <InfoUserComponent label={"Zip Code"} value={ zipcode } />

                    </ProfileComponent.Body>
                </ProfileComponent>
            }

        </LayoutNavAndFooter>
    )
}