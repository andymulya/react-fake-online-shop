import { useNavigate } from "react-router-dom"
import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { useEffect } from "react"
import { getToken } from "../services/localStorageServices"
import ButtonBack from "../components/ButtonBack"
import Title from "../components/Title"
import Loading from "../components/Loading"

export default function Settings(){
    const navigate = useNavigate()

    useEffect(() => {
        if(!getToken()) navigate('/login')
    }, [])

    return (
        <LayoutNavAndFooter>
            <ButtonBack />

            {
                (!getToken()) ?
                <Loading /> : 
                <div className="px-5 mt-5">
                    <Title nameTitle={"Setting"} />
                    <div>
                        <h1>Page Setting</h1>
                    </div>
                </div>
            }

        </LayoutNavAndFooter>
    )
}