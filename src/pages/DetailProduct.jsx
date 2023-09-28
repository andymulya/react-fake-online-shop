import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { useGetProductWithIdQuery } from "../redux/slices/storeSlice"
import Loading from "../components/Loading"
import ButtonBack from "../components/ButtonBack"
import { addCart } from "../redux/slices/cartSlice"
import { getToken } from "../services/localStorageServices"
import Modal from "../components/Modal"
import ButtonOutline from "../components/ButtonOutline"
import ButtonSolid from "../components/ButtonSolid"
import { useEffect } from "react"
import { handleIsTrigger } from "../redux/slices/triggerSlice"

export default function DetailProduct(){
    const isTrigger = useSelector((state) => state.trigger)
    const carts = useSelector((state) => state.cart)
    const token = getToken()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { productId } = useParams()
    const { data, isLoading } = useGetProductWithIdQuery(productId)

    const handleAddToCart = () => {
        dispatch(addCart({
            id: data.id,
            title: data.title,
            price: data.price,
            category: data.category,
            image: data.image,
            qty: 1
        }))
        dispatch(handleIsTrigger(true))
    }

    const handleOpenModal = () => {
        if(token){
            window.my_action_add_to_cart.showModal()
        }else{
            navigate('/login')
        }
    }

    useEffect(() => {
        (isTrigger) && localStorage.setItem(token.sub, JSON.stringify(carts))
        dispatch(handleIsTrigger(false))
    }, [isTrigger])

    return(
        <LayoutNavAndFooter>

            <ButtonBack />
            {
                (isLoading) ?
                    <Loading /> : 
                    (data) ?
                    <div className="flex flex-col md:flex-row items-center gap-5 md:w-auto justify-around md:mt-24">
                        <figure>
                            <img src={ data.image } className="object-cover h-72 sm:h-96 w-auto"/>
                        </figure>

                        <div className="flex flex-col items-center gap-3 my-10 mx-5 md:w-[450px]">
                            <h1 className="font-bold text-ellipsis sm:text-lg md:text-2xl">{ data.title }</h1>
                            <h2 className="uppercase text-sm font-semibold">{ data.category }</h2>
                            <span className="font-bold">${ data.price }</span>
                            
                            <div className="flex flex-row gap-3 text-sm justify-around w-full">
                                <span>{ data.rating.count }</span>
                                <span>{ data.rating.rate }</span>
                            
                            </div>
                            <p className="mb-14">{ data.description }</p>
                            
                            <div className="flex flex-col w-full items-end">

                                <Modal button={ <ButtonOutline handleClick={ handleOpenModal }>Add To Cart</ButtonOutline> } idModal={"my_action_add_to_cart"}>
                                    <Modal.Body>
                                        <h1>Add To Cart</h1> 
                                        <p>Do you want to add this item ?</p>
                                        <div className="modal-action">
                                            <ButtonOutline>No</ButtonOutline>
                                            <ButtonSolid handleOnClick={ handleAddToCart } style={"bg-cyan-500 hover:bg-cyan-700 text-white"}>Yes</ButtonSolid>
                                        </div>
                                    </Modal.Body>
                                </Modal>

                            </div>
                        </div>
                    </div> :
                    <h1>Detail Product Kosong</h1>
            }
        </LayoutNavAndFooter>
    )
}