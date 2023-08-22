import Card from "../Card"
import { useGetAllProductsQuery } from '../../redux/slices/storeSlice'
import Loading from "../Loading"

export default function ProductList(){
    const { data, isLoading } = useGetAllProductsQuery()

    if(isLoading) return <Loading />

    return data.map((product) => {
        const { id, title, price, category, description, image } = product

        return(
            <Card key={ id }>
                <Card.Head>
                    <img src={ image } alt='product' className="h-60 w-auto object-cover transition-all scale-90 group-hover:scale-105" />
                </Card.Head>
                <Card.Body  titleProduct={ title } priceProduct={ price } categoryProduct={ category } />
            </Card>
        )
    })
}
