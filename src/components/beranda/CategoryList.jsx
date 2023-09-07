import { useGetAllCategoriesQuery } from "../../redux/slices/storeSlice"
import CategoryComponent from "../CategoryComponent"
import iconElectronic from "../../assets/img/electronic.png"
import iconJewelery from "../../assets/img/jewelery.png"
import iconMenClothing from "../../assets/img/men_clothing.png"
import iconWomenClothing from "../../assets/img/women_clothing.png"
import { useDispatch } from "react-redux"
import { getInputSearch } from "../../redux/slices/searchSlice"

export default function CategoryList(){
    const { data, isSuccess } = useGetAllCategoriesQuery()
    const dispatch = useDispatch()
    const imgCategory = [iconElectronic, iconJewelery, iconMenClothing, iconWomenClothing]

    const handleGetProductByCategory = (category) => {
        dispatch(getInputSearch(category.toLowerCase()))
    }
    
    return isSuccess && data.map((category, i) => {
        return <CategoryComponent key={ i } titleCategory={ category } image={ imgCategory[i] } handleOnClick={() => handleGetProductByCategory(category)} />
    }) 
}