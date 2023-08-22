import { useGetAllProductsCategoriesQuery } from "../../redux/slices/storeSlice"
import CategoryComponent from "../CategoryComponent"
import iconElectronic from "../../assets/img/electronic.png"
import iconJewelery from "../../assets/img/jewelery.png"
import iconMenTshirt from "../../assets/img/men_tshirt.png"
import iconWomenTshirt from "../../assets/img/women_tshirt.png"

export default function CategoryList(){
    const { data, isSuccess } = useGetAllProductsCategoriesQuery()
    const imgCategory = [iconElectronic, iconJewelery, iconMenTshirt, iconWomenTshirt]
    
    return isSuccess && data.map((category, i) => {
        return <CategoryComponent key={ i } titleCategory={ category } image={ imgCategory[i] } />
    }) 
}