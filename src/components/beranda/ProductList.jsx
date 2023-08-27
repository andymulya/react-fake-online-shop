import CardProduct from "../CardProduct"
import { useGetAllProductsQuery } from '../../redux/slices/storeSlice'
import Loading from "../Loading"

export default function ProductList(){
    const { data, isLoading } = useGetAllProductsQuery()

    if(isLoading) return <Loading />

    return (data) ?
        data.map((product) => {
            const { id, title, price, category, image } = product

            return(
                <CardProduct key={ id }>
                    <CardProduct.Head>
                        <img src={ image } alt='product' className="h-60 w-auto object-cover transition-all scale-90 group-hover:scale-105" />
                    </CardProduct.Head>
                    <CardProduct.Body titleProduct={ title } priceProduct={ price } categoryProduct={ category } />
                </CardProduct>
            )
        }) : 
        <h1>Product Kosong</h1>
}
