import { Link } from 'react-router-dom'
import onlineShopping from '../assets/img/online_shopping.png'

export default function LayoutSign({ children }){
    return(
        <div className="flex flex-col md:flex-row gap-10 h-1/2">
            <div className="md:w-2/3 rounded-br-full z-10 h-2/4 bg-gradient-to-br from-navy to-sky-200">
                <h1 className="px-10 py-5 font-bold text-2xl text-white"><Link to={"/"}>Andy&apos;s</Link></h1>
                <img src={ onlineShopping } className=""/>
            </div>
            <div className="md:w-2/4 z-10 flex flex-col justify-center items-center gap-10 px-5 pb-14">
                <div>
                    <div className="mb-10 md:mt-10">
                        <h1 className="font-bold text-4xl text-navy">Welcome</h1>
                        <h2 className="font-bold text-2xl text-navy">Happy Shopping</h2>
                        <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}