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
import iconCreditCard from '../assets/img/credit_card.png'
import TextInput from '../components/TextInput'

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

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 mt-10">

                <div className="w-auto sm:w-2/3">
                    <Title nameTitle={"Cart"} />
                    <div className="flex flex-col gap-10 p-5">
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

                        <div className="flex flex-col h-[370px] overflow-scroll px-3">
                            {
                                (carts.length > 0) ? carts.map((cart) => <CardCart key={cart.id} title={cart.title} price={cart.price} image={cart.image} qty={cart.qty} idItem={cart.id} />) : <h1>cart kosong</h1>
                            }
                        </div>
                        <div className="flex flex-row justify-between font-bold text-md uppercase">
                            <h2>Result :</h2>
                            <span>${ currentPrice }</span>
                        </div>
                    </div>
                </div>

                <div className="w-auto sm:w-2/4">
                    <Title nameTitle={"Payment"} />
                    <div className="flex flex-col gap-10 bg-gradient-to-tr from-cyan-600 to-cyan-400 border-2 rounded-lg mt-5 mb-10 p-5">
                        
                        <div className="flex flex-col items-center gap-5">
                            <label className="text-base-100 text-sm font-bold">Payment Method</label>
                            <div className="flex flex-row items-center border-2 border-base-100 rounded-full object-cover w-[145px] text-center p-2 cursor-pointer font-semibold text-base-100">
                                <img src={iconCreditCard} className="w-[30px] h-[30px]" />
                                <span className="text-sm uppercase whitespace-nowrap">Credit Card</span>
                            </div>
                        </div>

                        <div>
                            <form onSubmit={(e) => {e.preventDefault()}} className="flex flex-col gap-5" >
                                <div className="flex flex-col">
                                    <label>Name On Card:</label>
                                    <TextInput typeInput={"text"} placeholder={"Name On Card"} />
                                </div>

                                <div className="flex flex-col">
                                    <label>Card Number:</label>
                                    <TextInput typeInput={"text"} placeholder={"Card Number"}/>
                                </div>

                                <div className="flex flex-col gap-5 sm:flex-row">
                                    <div className="flex flex-col">
                                        <label>Expiration Date:</label>
                                        <div className="flex flex-row">
                                            <TextInput typeInput={"number"} placeholder={"MM"} />
                                            <TextInput typeInput={"number"} placeholder={"YYYY"} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label>CVV:</label>
                                        <TextInput typeInput={"text"} placeholder={"XXX"} />
                                    </div>
                                </div>

                                <ButtonSolid style={"bg-green-500 hover:bg-green-700"}>CheckOut</ButtonSolid>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </LayoutNavAndFooter>
    )
}