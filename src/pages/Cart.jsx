import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getToken } from "../services/localStorageServices"
import ButtonBack from "../components/ButtonBack"
import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import Title from "../components/Title"
import CardCart from "../components/CardCart"
import { useDispatch, useSelector } from "react-redux"
import { handleIsTrigger } from "../redux/slices/triggerSlice"
import Modal from "../components/Modal"
import ButtonSolid from "../components/ButtonSolid"
import ButtonOutline from "../components/ButtonOutline"
import { removeAllItemCart } from "../redux/slices/cartSlice"

export default function Cart(){
    const carts = useSelector((state) => state.cart)
    const isTrigger = useSelector((state) => state.trigger)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleShowModalDelete = () => window.my_button_delete_all.showModal()
    const handleDeleteAllItem = () => {
        dispatch(handleIsTrigger(true))
        dispatch(removeAllItemCart())
    }

    const currentPrice = carts.reduce((acc, currentValue) => {
        return acc + (currentValue.price * currentValue.qty)
    },0)

    useEffect(() => {
        if(!getToken()) navigate('/login')
    }, [])

    useEffect(() => {
        (isTrigger) && localStorage.setItem(getToken().sub, JSON.stringify(carts))
        dispatch(handleIsTrigger(false))

    }, [isTrigger])
    
    return (
        <LayoutNavAndFooter>
            <ButtonBack />

            <div className="flex flex-col justify-around sm:flex-row mt-5">

                <div>
                    <Title nameTitle={"Cart"} />
                    <div className="flex flex-col gap-10 border-2 rounded-lg mt-5 mb-10 p-5">

                        <Modal button={<ButtonSolid style={"btn-xs rounded-full border-2 border-red-600 bg-transparent text-red-500 hover:bg-red-600 hover:text-base-100"} handleOnClick={ handleShowModalDelete }>Remove All</ButtonSolid>} idModal={"my_button_delete_all"}>
                            <Modal.Body>
                                <h1>Delete</h1>
                                <h3>Do you want to delete this item ?</h3>
                                <div className="flex flex-row gap-5 justify-end">
                                    <ButtonOutline>No</ButtonOutline>
                                    <ButtonSolid style={"bg-cyan-500"} handleOnClick={handleDeleteAllItem} >Yes</ButtonSolid>
                                </div>
                            </Modal.Body>
                        </Modal>

                        {
                            (carts.length > 0) ? carts.map((cart) => <CardCart key={cart.id} title={cart.title} price={cart.price} image={cart.image} qty={cart.qty} idItem={cart.id} />) : <h1>cart kosong</h1>
                        }
                        <div className="flex flex-row justify-between font-bold text-md uppercase">
                            <h2>Result :</h2>
                            <span>${ currentPrice }</span>
                        </div>
                    </div>
                </div>

                <div>
                    <Title nameTitle={"Payments"} />
                    <div className="flex flex-col gap-10 border-2 rounded-lg mt-5 mb-10 p-5">
                    </div>
                </div>

            </div>
        </LayoutNavAndFooter>
    )
}