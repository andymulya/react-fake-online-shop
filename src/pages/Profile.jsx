import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { getToken } from "../services/localStorageServices"
import { useGetUserWithIdQuery } from "../redux/slices/storeSlice"
import Loading from '../components/Loading'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import ProfileComponent from "../components/profile/ProfileComponent"
import InfoUserComponent from "../components/profile/InfoUserComponent"
import Title from '../components/Title'
import ButtonBack from "../components/ButtonBack"

export default function Profile(){
    const userId = getToken().sub
    const navigate = useNavigate()
    const { data, isLoading } = useGetUserWithIdQuery(userId)
    
    useEffect(() => {
        if(!userId) navigate('/login')
    }, [])
    
    return(
        <LayoutNavAndFooter>
            <ButtonBack />
            
            <div className="mt-5 px-5">
                <Title nameTitle={"Profile"}/>
                <p className="text-xs mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a id vero iusto nostrum veritatis autem.</p>
            </div>

            <div className="flex justify-center">
                {
                    (isLoading) ?
                        <Loading /> : 
                        (data) ?
                            <ProfileComponent>
                                <ProfileComponent.Head title={ `${data.name.firstname} ${data.name.lastname}` } />
                                <ProfileComponent.Body>
                                    
                                    <InfoUserComponent label={"Username"} value={ data.username } />
                                    <InfoUserComponent label={"First Name"} value={ data.name.firstname } />
                                    <InfoUserComponent label={"Last Name"} value={ data.name.lastname } />
                                    <InfoUserComponent label={"Email"} value={ data.email } />
                                    <InfoUserComponent label={"Phone"} value={ data.phone } />
                                    <InfoUserComponent label={"City"} value={ data.address.city } />
                                    <InfoUserComponent label={"Street"} value={ data.address.street } />
                                    <InfoUserComponent label={"Zip Code"} value={ data.address.zipcode } />

                                </ProfileComponent.Body>
                            </ProfileComponent> :
                            <h1>Data Profile tidak ada</h1>
                }
            </div>

        </LayoutNavAndFooter>
    )
}