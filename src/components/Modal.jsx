import ButtonGhost from "./ButtonGhost"

export default function Modal({ titleCart, children, handleClick, idModal, nameButton, currentPrice }){
    return(
        <>
            <ButtonGhost handleClick={ handleClick }>
                { nameButton }
            </ButtonGhost>
            
            <dialog id={ idModal } className="modal modal-scroll modal-bottom md:modal-middle">
                <form method="dialog" className="modal-box max-h-[400px]">
                    <h3 className="font-bold text-lg uppercase border-b-2 mb-7">{ titleCart }</h3>
                    { children }
                    <div className="flex flex-row justify-between font-bold uppercase text-sm border-t-2 pt-3 mt-10">
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