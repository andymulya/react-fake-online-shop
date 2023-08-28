import { Link } from "react-router-dom"
import Badge from "./Badge"

export default function CardProduct({ children, productId }){
    return(
        <Link to={`product/${productId}`}>
            <div className="card w-72 bg-base-100 shadow-md mb-5 group hover:shadow-lg transition-all rounded-t-2xl">
                { children }
            </div>
        </Link>
    )
}

const Head = ({ children }) => {
    return(
        <figure>
            { children }
        </figure>
    )
}

const Body = ({ titleProduct, priceProduct, categoryProduct }) => {
    return (
        <div className="card-body h-44 flex flex-col justify-around bg-gradient-to-t from-cyan-600 to-cyan-300 rounded-b-2xl">
            <h2 className="card-title">
                <span className="text-sm">{ titleProduct }</span>
            </h2>
            <span className="font-semibold text-white">{`$${priceProduct}`}</span>
            <div className="card-actions justify-end">
                <Badge titleBadge={ categoryProduct } />
            </div>
        </div>
    )
}

CardProduct.Head = Head
CardProduct.Body = Body