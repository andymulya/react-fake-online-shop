import { useGetAllCategoriesQuery } from "../../redux/slices/storeSlice"
import CategoryComponent from "../CategoryComponent"
import iconElectronic from "../../assets/img/electronic.png"
import iconJewelery from "../../assets/img/jewelery.png"
import iconMenTshirt from "../../assets/img/men_tshirt.png"
import iconWomenTshirt from "../../assets/img/women_tshirt.png"
import { useDispatch } from "react-redux"
import { getInputSearch } from "../../redux/slices/searchSlice"

export default function CategoryList(){
    const { data, isSuccess } = useGetAllCategoriesQuery()
    const dispatch = useDispatch()
    const imgCategory = [iconElectronic, iconJewelery, iconMenTshirt, iconWomenTshirt]

    const handleGetProductByCategory = (category) => {
        dispatch(getInputSearch(category.toLowerCase()))
    }
    
    return isSuccess && data.map((category, i) => {
        return <CategoryComponent key={ i } titleCategory={ category } image={ imgCategory[i] } handleOnClick={() => handleGetProductByCategory(category)} />
    }) 
}