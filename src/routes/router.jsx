import { createBrowserRouter } from 'react-router-dom'

import Layout from '../layouts/Layout'
import Beranda from '../pages/Beranda'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import Settings from '../pages/Settings'
import { Login } from '../pages/Login'

const router  = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Beranda />
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
    {
        path: "login",
        element: <Login />
    }
])

export default router