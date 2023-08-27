import { Link, useNavigate } from "react-router-dom"

import ButtonOutline from '../components/ButtonOutline'
import iconExit from '../assets/img/exit.png'

export default function Dropdown({ children }){
    return (
        <div className="dropdown dropdown-end z-40">{ children }</div>
    )
}

const LabelDropdown = ({ children }) => {
    return (
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">{ children }</label>
    )
}

const ItemsDropdown = ({ navItems }) => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        navigate('/')
        localStorage.removeItem('token')
    }

    return (
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
                navItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link to={item.link} className="flex items-center gap-3 hover:bg-cyan-600 hover:text-base-100">
                                <span>{item.icon}</span>
                                <span>{item.nameNav}</span>
                            </Link>
                        </li>
                    )
                })
            }
            <li>
                <ButtonOutline handleClick={ handleLogOut }>
                    <img src={iconExit} className="w-7" />
                    <span>Log Out</span>
                </ButtonOutline>
            </li>
        </ul>
    )
}

Dropdown.LabelDropdown = LabelDropdown
Dropdown.ItemsDropdown = ItemsDropdown