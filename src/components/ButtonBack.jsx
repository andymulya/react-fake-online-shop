import ButtonGhost from "./ButtonGhost"
import iconBack from "../assets/img/back.png"
import { useNavigate } from "react-router-dom"

export default function ButtonBack(){
    const navigate = useNavigate()

    const handleButtonBack = () => navigate(-1)

    return(
        <ButtonGhost handleClick={ handleButtonBack }>
            <img src={iconBack} alt="back" className="w-[40px]" />
        </ButtonGhost>
    )
}