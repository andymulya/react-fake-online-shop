import { useEffect, useState } from "react"
import ButtonSmallCircle from "./ButtonSmallCircle"
import { useDispatch, useSelector } from "react-redux"
import { editValueQtyItemById, removeItemById } from "../redux/slices/cartSlice"
import { getToken } from "../services/localStorageServices"

export default function QtyComponent({ qty, idItem }){
    let [counter, setCounter] = useState(0)
    const carts = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleButtonPlus = () => {
        setCounter(++counter)
        dispatch(editValueQtyItemById({
            counter,
            idItem
        }))
    }

    const handleButtonMin = () => {
        setCounter(--counter)
        dispatch(editValueQtyItemById({
            counter,
            idItem
        }))
    }
    
    useEffect(() => {
        localStorage.setItem(getToken().sub, JSON.stringify(carts))
        setCounter(qty)
    }, [qty])


    return(
        <div className="flex flex-row items-center gap-2">
            <ButtonSmallCircle nameButton={"-"} handleOnclick={ handleButtonMin } />
            <p>{ counter }</p>
            <ButtonSmallCircle nameButton={"+"} handleOnclick={ handleButtonPlus } />
        </div>
    )
}