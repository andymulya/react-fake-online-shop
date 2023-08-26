import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LayoutNavAndFooter({ children }){
    return(
        <div>
            <Navbar />
            <div className="min-h-screen mt-24 px-3">
                { children }
            </div>
            <Footer />
        </div>
    )
}