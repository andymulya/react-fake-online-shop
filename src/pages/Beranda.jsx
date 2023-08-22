import ProductList from '../components/beranda/ProductList'
import CategoryList from '../components/beranda/CategoryList'

export default function Beranda(){

    return(
        <div className="px-3">
            <div>
                <h1>Category</h1>
                <div className="flex flex-row flex-wrap justify-center gap-5">
                    <CategoryList />
                </div>
            </div>
            <div>
                <h1 className="">Products</h1>
                <div className="flex flex-row flex-wrap gap-10 justify-center">
                    <ProductList />
                </div>
            </div>
        </div>
    )
}