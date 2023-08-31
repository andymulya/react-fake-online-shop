import { useDispatch, useSelector } from "react-redux"
import ButtonGhost from "./ButtonGhost"
import { removeAllItemCart } from "../redux/slices/cartSlice"
import Indicator from "./Indicator"

export default function Modal({ titleCart, children, handleClick, idModal, nameButton, currentPrice }){
    const carts = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleDeleteAllItem = () => dispatch(removeAllItemCart())
    const getCurrentQtyItem = carts.reduce((acc, currentValue) => {
        return acc + currentValue.qty
    }, 0)

    return(
        <>
            <Indicator value={ getCurrentQtyItem }>
                <ButtonGhost handleClick={ handleClick }>
                    { nameButton }
                </ButtonGhost>
            </Indicator>
            
            <dialog id={ idModal } className="modal modal-scroll modal-bottom md:modal-middle">
                <form method="dialog" className="flex flex-col justify-between modal-box min-h-[300px] max-h-[400px]">
                    <div className="flex border-b-2 mb-7 justify-between items-center pb-3">
                        <h3 className="font-bold text-lg uppercase">{ titleCart }</h3>
                        <div className="text-xs text-red-500 cursor-pointer font-semibold uppercase rounded-full border-2 border-red-500 px-3 transition-all hover:bg-red-500 hover:text-base-100" onClick={ handleDeleteAllItem }>Remove All</div>
                    </div>
                    { children }
                    <div className="flex flex-row justify-between font-bold uppercase text-sm border-t-2 pt-3 mt-7">
                        <label>Result Price : </label>
                        <span>${ currentPrice }</span>
                    </div>
                </form>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}