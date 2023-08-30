import ButtonGhost from "./ButtonGhost"

export default function Modal({ titleCart, children, handleClick, idModal, nameButton, resultAllPriceItemInCart }){

    return(
        <>
            <ButtonGhost handleClick={ handleClick }>
                { nameButton }
            </ButtonGhost>
            
            <dialog id={ idModal } className="modal modal-scroll modal-bottom md:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg uppercase">{ titleCart }</h3>
                    { children }
                    <div className="flex flex-row justify-between font-bold uppercase mt-10 text-sm border-t-2 pt-3 ">
                        <label>Result Price : </label>
                        <span>${ resultAllPriceItemInCart || 0 }</span>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}