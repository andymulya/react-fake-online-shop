import { Link } from "react-router-dom"
import Badge from "./Badge"

export default function CardProduct({ children, productId }){
    return(
        <Link to={`product/${productId}`}>
            <div className="card w-72 bg-base-100 shadow-md mb-5 group hover:shadow-lg transition-all rounded-2xl">
                { children }
            </div>
        </Link>
    )
}

const Head = ({ children }) => {
    return(
        <div className="bg-base-100">
            <figure>
                { children }
            </figure>
        </div>
    )
}

const Body = ({ titleProduct, priceProduct, categoryProduct }) => {
    return (
        <div className="card-body flex flex-col justify-around bg-black/50 absolute left-0 right-0 bottom-0 transition-all opacity-0 group-hover:opacity-100">
            <h2 className="card-title text-sm font-bold text-sky-200">{ titleProduct }</h2>
            <span className="font-semibold text-slate-100">{`$${priceProduct}`}</span>
            <div className="card-actions justify-end">
                <Badge titleBadge={ categoryProduct } />
            </div>
        </div>
    )
}

CardProduct.Head = Head
CardProduct.Body = Body