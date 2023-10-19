import { Link, useNavigate } from 'react-router-dom'

import Dropdown from './Dropdown'
import iconAvatarDefault from '../assets/img/avatar_default.webp'
import ButtonSolid from './ButtonSolid'
import { getToken } from '../services/localStorageServices'
import ButtonGhost from './ButtonGhost'
import { useDispatch, useSelector } from 'react-redux'
import Search from './Search'
import { getInputSearch } from '../redux/slices/searchSlice'
import { useEffect } from 'react'
import { addInitialState } from '../redux/slices/cartSlice'

const navItems = [
    {
        nameNav: "Profile",
        link: "/profile",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
        nameNav: "Cart",
        link: "/cart",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
    },
]

export default function Navbar(){
    const searchInput = useSelector((state) => state.search)
    const dispatch = useDispatch()
    const token = getToken()
    const navigate = useNavigate()


    const handleNavigateLogin = () => navigate('/login')

    useEffect(() => {
        if(token){
            const getCart = JSON.parse(localStorage.getItem(token.sub))
            dispatch(addInitialState(getCart))
        }
    }, [])

    return(
        <div className="navbar mb-10 glass fixed top-0 right-0 left-0 z-50">

            {/* Title Web */}
            <div className="navbar-start">
                <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Andy&apos;s</Link>
            </div>

            <div className="navbar-end">

                {/* Input Search */}
                <Search value={ searchInput } handleInputSearch={(e) => dispatch(getInputSearch(e.target.value.toLowerCase()))}/>

                {/* Button Search */}
                <ButtonGhost handleClick={ () => navigate('/') }>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </ButtonGhost>


                {/* Dropdown */}
                {
                    (token) ? 
                    <div className="flex justify-center ml-2">
                        <Dropdown>
                            <Dropdown.LabelDropdown>
                                <div className="w-10 rounded-full">
                                    <img src={ iconAvatarDefault } />
                                </div>
                            </Dropdown.LabelDropdown>
                            <Dropdown.ItemsDropdown navItems={ navItems } />
                        </Dropdown>
                    </div> : 
                    <ButtonSolid style={"btn-xs btn-ghost text-navy hover:bg-navy hover:text-white"} handleOnClick={handleNavigateLogin} >Login</ButtonSolid>
                }
            </div>
        </div>
    )
}