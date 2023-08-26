import ProductList from '../components/beranda/ProductList'
import CategoryList from '../components/beranda/CategoryList'
import Title from '../components/Title'
import LayoutNavAndFooter from '../layouts/LayoutNavAndFooter'

export default function Beranda(){

    return(
        <LayoutNavAndFooter>
            <div className="flex flex-col gap-10">
                <div>
                    <Title nameTitle={"Category"} />
                    <div className="flex flex-row flex-wrap justify-center md:justify-start gap-5">
                        <CategoryList />
                    </div>
                </div>
                <div>
                    <Title nameTitle={"Products"} />
                    <div className="flex flex-row flex-wrap gap-10 justify-center">
                        <ProductList />
                    </div>
                </div>
            </div>
        </LayoutNavAndFooter>
    )
}