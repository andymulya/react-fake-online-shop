import { Link } from "react-router-dom"

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
    return (
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
                navItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <div>
                                <Link to={item.link} className="flex items-center gap-3">
                                    <span>{item.icon}</span>
                                    <span>{item.nameNav}</span>
                                </Link>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

Dropdown.LabelDropdown = LabelDropdown
Dropdown.ItemsDropdown = ItemsDropdown