import ButtonGhost from "./ButtonGhost"

export default function Modal({ titleCart, children, handleClick, idModal, nameButton }){

    return(
        <>
            <ButtonGhost handleClick={ handleClick }>
                { nameButton }
            </ButtonGhost>
            
            <dialog id={ idModal } className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">{ titleCart }</h3>
                    { children }
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}