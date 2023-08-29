import { useEffect, useState } from "react"
import ButtonCounter from "./ButtonCounter"
import { useDispatch, useSelector } from "react-redux"
import { editValueQtyItemById } from "../redux/slices/cartSlice"
import { getToken } from "../services/localStorageServices"

export default function QtyComponent({ qty, idItem }){
    let [ counter, setCounter ] = useState(qty)
    const carts = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const convertCartToJson = JSON.stringify(carts)

    useEffect(() => {
        if(counter !== 0) {
            dispatch(editValueQtyItemById({
                idItem,
                counter
            }))
        }
    }, [counter])

    if(getToken()) localStorage.setItem(getToken().sub, convertCartToJson)
    
    const handleButtonPlus = () => {
        setCounter(counter+1)
    }

    const handleButtonMin = () => {
        if(counter > 0) setCounter(counter-1)
    }

    return(
        <div className="flex flex-row items-center gap-2">
            <ButtonCounter nameButton={"+"} handleOnclick={ handleButtonPlus } />
            <p>{ counter }</p>
            <ButtonCounter nameButton={"-"} handleOnclick={ handleButtonMin } />
        </div>
    )
}