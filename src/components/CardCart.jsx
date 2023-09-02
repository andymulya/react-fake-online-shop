import QtyComponent from "./QtyComponent"
import iconDelete from '../assets/img/delete.png'
import { useDispatch, useSelector } from "react-redux"
import { removeItemById } from "../redux/slices/cartSlice"
import { useEffect } from "react"
import { handleIsTrigger } from "../redux/slices/triggerSlice"
import ButtonSolid from "./ButtonSolid"

export default function CardCart({ title, price, image, qty, idItem }){
    const dispatch = useDispatch()

    const handleDeleteItem = () => {
        dispatch(handleIsTrigger(true))
        dispatch(removeItemById(idItem))
    }

    useEffect(() => {
        if(qty == 0){
            dispatch(handleIsTrigger(true))
            dispatch(removeItemById(idItem))
        }
    }, [qty])

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
                
                    <ButtonSolid handleOnClick={ handleDeleteItem } style={"bg-red-600 rounded-full btn-sm hover:bg-red-700"}>
                        <img src={iconDelete} className="w-[20px] h-[20px]" />
                    </ButtonSolid>
                </div>
            </div>
        </div>
    )
}