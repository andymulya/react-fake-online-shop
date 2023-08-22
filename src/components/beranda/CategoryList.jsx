import { useGetAllProductsCategoriesQuery } from "../../redux/slices/productSlice"
import CategoryComponent from "../CategoryComponent"
import iconElectronic from "../../assets/img/electronic.png"
import iconJewelery from "../../assets/img/jewelery.png"
import iconMenTshirt from "../../assets/img/men_tshirt.png"
import iconWomenTshirt from "../../assets/img/women_tshirt.png"
import Loading from "../Loading"

export default function CategoryList(){
    const { data, isLoading, isSuccess } = useGetAllProductsCategoriesQuery()
    const imgCategory = [iconElectronic, iconJewelery, iconMenTshirt, iconWomenTshirt]

    if(isLoading) return <Loading />
    
    return data.map((category, i) => {
        return <CategoryComponent key={ i } titleCategory={ category } image={ imgCategory[i] } />
    }) 
}