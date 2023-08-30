import ButtonSmallCircle from "./ButtonSmallCircle"
import QtyComponent from "./QtyComponent"
import iconDelete from '../assets/img/delete.png'
import { useDispatch } from "react-redux"
import { removeItemById } from "../redux/slices/cartSlice"

export default function CardCart({ title, price, image, qty, idItem }){
    
    const dispatch = useDispatch()

    const handleDeleteItem = () => dispatch(removeItemById(idItem))

    return (
        <div className="flex flex-col items-left gap-4 mt-3">
            <div className="flex items-center gap-3">
                <img src={image} className="avatar w-14 h-14 rounded-full table-cell" />
                <h2 className="text-sm font-bold">{ title }</h2>
            </div>
            <div className="flex items-center justify-between gap-5">
                <div className="font-semibold">${ price }</div>

                <div className="flex gap-5">
                    <QtyComponent qty={ qty } idItem={ idItem } />
                    <div className="bg-red-500 rounded-full p-2 cursor-pointer" onClick={ handleDeleteItem }>
                        <img src={iconDelete} className="w-[20px] h-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}