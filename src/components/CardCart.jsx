import QtyComponent from "./QtyComponent"

export default function CardCart({ title, price, image, qty, idItem }){
    return (
        <div className="flex flex-col items-left gap-4 mt-3">
            <div className="flex items-center gap-3">
                <img src={image} className="avatar w-14 h-14 rounded-full table-cell" />
                <h2 className="text-sm font-bold">{ title }</h2>
            </div>
            <div className="flex items-center justify-between gap-5">
                <div className="font-semibold">${ price }</div>
                <QtyComponent qty={ qty } idItem={ idItem } />
            </div>
        </div>
    )
}