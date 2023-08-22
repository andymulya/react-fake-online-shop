import Badge from "./Badge"

export default function Card({ children }){
    return(
        <div className="card w-72 sm:w-96 bg-base-100 shadow-md mb-5 group hover:scale-105 hover:shadow-lg transition-all">
            { children }
        </div>
    )
}

const Head = ({ children }) => {
    return(
        <figure className="group-hover:scale-95 transition-all">
            { children }
        </figure>
    )
}

const Body = ({ titleProduct, priceProduct, categoryProduct }) => {
    return (
        <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">
                <span>{ titleProduct }</span>
                <div className="badge badge-secondary">NEW</div>
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