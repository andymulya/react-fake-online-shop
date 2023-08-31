import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { useGetProductWithIdQuery } from "../redux/slices/storeSlice"
import Loading from "../components/Loading"
import ButtonBack from "../components/ButtonBack"
import ButtonOutline from "../components/ButtonOutline"
import { addCart } from "../redux/slices/cartSlice"
import { getToken } from "../services/localStorageServices"

export default function DetailProduct(){
    const token = getToken()
    const navigate = useNavigate()
    const { productId } = useParams()
    const { data, isLoading } = useGetProductWithIdQuery(productId)
    const carts = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if(token){
            dispatch(addCart({
                id: data.id,
                title: data.title,
                price: data.price,
                category: data.category,
                image: data.image,
                qty: 1
            }))
        }else{
            navigate('/login')
        }
    }

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

                        <div className="flex flex-col items-center gap-3 my-10 md:w-[450px]">
                            <h1 className="font-bold text-ellipsis sm:text-lg md:text-2xl">{ data.title }</h1>
                            <h2 className="uppercase text-sm font-semibold">{ data.category }</h2>
                            <span className="font-bold">${ data.price }</span>
                            <div className="flex flex-row gap-3 text-sm justify-around w-full">
                                <span>{ data.rating.count }</span>
                                <span>{ data.rating.rate }</span>
                            </div>
                            <p className="mb-14">{ data.description }</p>
                            <div className="flex flex-col w-full items-end">
                                <ButtonOutline handleClick={handleAddToCart}>
                                    <span>Add To Cart</span>
                                </ButtonOutline>
                            </div>
                        </div>
                    </div> :
                    <h1>Detail Product Kosong</h1>
            }
        </LayoutNavAndFooter>
    )
}