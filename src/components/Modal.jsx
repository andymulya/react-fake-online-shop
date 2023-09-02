import ButtonOutline from "./ButtonOutline"
import ButtonSolid from './ButtonSolid'

export default function Modal({ children, button, idModal }){

    return(
        <div>
            { button }
            <dialog id={ idModal } className="modal">
                <form method="dialog" className="modal-box">
                    { children }
                </form>
            </dialog>
        </div>
    )
}

const Body = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

Modal.Body = Body