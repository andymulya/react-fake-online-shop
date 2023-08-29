import { useEffect, useState } from "react"
import ButtonCounter from "./ButtonCounter"
import { useDispatch, useSelector } from "react-redux"
import { editValueQtyItemById, removeItemById } from "../redux/slices/cartSlice"
import { getToken } from "../services/localStorageServices"

export default function QtyComponent({ qty, idItem }){
    const carts = useSelector((state) => state.cart)
    let [ counter, setCounter ] = useState(qty)
    const dispatch = useDispatch()
    const convertCartToJson = JSON.stringify(carts)

    useEffect(() => {
        if(getToken()){
            if(counter !== 0) {
                dispatch(editValueQtyItemById({
                    idItem,
                    counter
                }))
            }else{
                dispatch(removeItemById(idItem))
            }
        }
    }, [counter])

    useEffect(() => {
        setCounter(qty)
    }, [qty])

    if(getToken()) localStorage.setItem(getToken().sub, convertCartToJson)
    
    const handleButtonPlus = () => {
        setCounter(counter+1)
    }

    const handleButtonMin = () => {
        if(counter > 0) setCounter(counter-1)
    }

    return(
        <div className="flex flex-row items-center gap-2">
            <ButtonCounter nameButton={"-"} handleOnclick={ handleButtonMin } />
            <p>{ counter }</p>
            <ButtonCounter nameButton={"+"} handleOnclick={ handleButtonPlus } />
        </div>
    )
}