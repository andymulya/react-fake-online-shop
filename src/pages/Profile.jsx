import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { getToken } from "../services/localStorageServices"
import { useGetUserWithIdQuery } from "../redux/slices/storeSlice"
import Loading from '../components/Loading'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ProfileComponent from "../components/profile/ProfileComponent"
import Title from '../components/Title'
import ButtonBack from "../components/ButtonBack"
import ButtonSolid from "../components/ButtonSolid"
import InfoUserList from "../components/profile/InfoUserList"
import IconEdit from "../assets/img/edit.png"
import ButtonGhost from "../components/ButtonGhost"

export default function Profile(){
    const userId = getToken().sub
    const [isEdited, setEdited] = useState(false)
    const navigate = useNavigate()
    const { data, isLoading } = useGetUserWithIdQuery(userId)
    
    useEffect(() => {
        if(!userId) navigate('/login')
    }, [])
    
    return(
        <LayoutNavAndFooter>
            <ButtonBack />
            
            <div className="mt-5 px-10">
                <Title nameTitle={"Profile"}/>
                <p className="text-xs mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a id vero iusto nostrum veritatis autem.</p>
            </div>

            <div className="flex justify-center">
                {
                    (isLoading) ?
                        <Loading /> :
                        (data) ?
                            <ProfileComponent>
                                <ProfileComponent.Head title={ `${data.name.firstname} ${data.name.lastname}` } />
                                
                                <ProfileComponent.Body>
                                    
                                    <InfoUserList data={data} isEdited={isEdited}/>

                                </ProfileComponent.Body>

                                <ButtonSolid style={"btn-circle bg-navy p-3 absolute -top-5 -right-5 hover:bg-cyan-800"} handleOnClick={() => setEdited((prev) => !prev)}>
                                    <img src={IconEdit} className="w-[50px]"/>
                                </ButtonSolid>

                            </ProfileComponent> :
                            <h1>Data Profile tidak ada</h1>
                }
            </div>
            

        </LayoutNavAndFooter>
    )
}