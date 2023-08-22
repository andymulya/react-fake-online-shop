import Card from "../Card"
import { useGetAllProductsQuery } from '../../redux/slices/productSlice'
import Loading from "../Loading"

export default function ProductList(){
    const { data, isLoading } = useGetAllProductsQuery()

    if(isLoading) return <Loading />

    return data.map((product) => {
        const { id, title, price, category, description, image } = product

        return(
            <Card key={ id }>
                <Card.Head>
                    <img src={ image } alt='product' className="h-60 w-full object-cover"/>
                </Card.Head>
                <Card.Body  titleProduct={ title } priceProduct={ price } categoryProduct={ category } />
            </Card>
        )
    })
}
