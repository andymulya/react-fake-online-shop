import Badge from "./Badge"

export default function Card({ children }){
    return(
        <div className="card w-72 bg-base-100 shadow-md mb-5 group hover:shadow-lg transition-all rounded-t-2xl">
            { children }
        </div>
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
        <div className="card-body flex flex-col justify-between bg-gradient-to-t from-cyan-600 to-white rounded-b-2xl">
            <h2 className="card-title">
                <span className="text-sm">{ titleProduct }</span>
            </h2>
            <span>{`$${priceProduct}`}</span>
            <div className="card-actions justify-end">
                <Badge titleBadge={ categoryProduct } />
            </div>
        </div>
    )
}

Card.Head = Head
Card.Body = Body