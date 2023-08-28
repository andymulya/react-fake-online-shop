import { createBrowserRouter } from 'react-router-dom'

import LayoutMain from '../layouts/LayoutMain'
import Beranda from '../pages/Beranda'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import DetailProduct from '../pages/DetailProduct'

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
                path: "settings",
                element: <Settings />
            },
            {
                path: "product/:productId",
                element: <DetailProduct />
            }
        ]
    },
])

export default router