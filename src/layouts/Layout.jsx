import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout(){
    return(
        <div>
            <Navbar />
            <div className="min-h-screen mt-24">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}