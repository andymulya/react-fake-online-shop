import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LayoutNavAndFooter({ children }){

    return(
        <div>
            <Navbar />
            <div className="min-h-screen mt-16">
                { children }
            </div>
            <Footer />
        </div>
    )
}