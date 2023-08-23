import { createBrowserRouter } from 'react-router-dom'

import LayoutMain from '../layouts/LayoutMain'
import Beranda from '../pages/Beranda'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import Settings from '../pages/Settings'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

const router  = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain />,
        children: [
            {
                path: "/",
                element: <Beranda />
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "settings",
                element: <Settings />
            }
        ]
    },
])

export default router