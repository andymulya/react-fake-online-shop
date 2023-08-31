import CardProduct from "../CardProduct"
import { useGetAllProductsQuery } from '../../redux/slices/storeSlice'
import Loading from "../Loading"
import { useSelector } from "react-redux"

export default function ProductList(){
    const searchInput = useSelector((state) => state.search)
    const { data, isLoading } = useGetAllProductsQuery()

    const filteredData = (data) && data.filter((products) => (searchInput.isEmpty) ? products : products.title.toLowerCase().includes(searchInput))

    if(isLoading) return <Loading />

    return (data) ?
        filteredData.map((product) => {
            const { id, title, price, category, image } = product

            return(
                <CardProduct key={ id } productId={id}>
                    <CardProduct.Head>
                        <img src={ image } alt='product' className="h-60 w-auto object-cover transition-all scale-90 group-hover:scale-105" />
                    </CardProduct.Head>
                    <CardProduct.Body titleProduct={ title } priceProduct={ price } categoryProduct={ category } />
                </CardProduct>
            )
        }) : 
        <h1>Product Kosong</h1>
}
