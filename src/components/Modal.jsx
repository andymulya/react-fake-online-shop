import { useDispatch } from "react-redux"
import ButtonGhost from "./ButtonGhost"
import { removeAllItemCart } from "../redux/slices/cartSlice"

export default function Modal({ titleCart, children, handleClick, idModal, nameButton, currentPrice }){
    const dispatch = useDispatch()

    const handleDeleteAllItem = () => dispatch(removeAllItemCart())

    return(
        <>
            <ButtonGhost handleClick={ handleClick }>
                { nameButton }
            </ButtonGhost>
            
            <dialog id={ idModal } className="modal modal-scroll modal-bottom md:modal-middle">
                <form method="dialog" className="modal-box max-h-[400px]">
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