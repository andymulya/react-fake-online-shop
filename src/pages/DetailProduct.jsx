import { useNavigate, useParams } from "react-router-dom"
import LayoutNavAndFooter from "../layouts/LayoutNavAndFooter"
import { useGetProductWithIdQuery } from "../redux/slices/storeSlice"
import Loading from "../components/Loading"
import ButtonSolid from "../components/ButtonSolid"
import ButtonGhost from "../components/ButtonGhost"
import iconBack from "../assets/img/back.png"

export default function DetailProduct(){
    const navigate = useNavigate()
    const { productId } = useParams()
    const { data, isLoading } = useGetProductWithIdQuery(productId)

    const handleButtonBack = () => navigate(-1)

    return(
        <LayoutNavAndFooter>
            <ButtonGhost handleClick={ handleButtonBack }>
                <img src={iconBack} alt="back" className="w-[40px]" />
            </ButtonGhost>
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
                            <ButtonSolid nameButton={"Add To Cart"} width={"w-full"}/>
                        </div>
                    </div> :
                    <h1>Detail Product Kosong</h1>
            }
        </LayoutNavAndFooter>
    )
}