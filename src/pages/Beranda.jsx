import ProductList from '../components/beranda/ProductList'
import CategoryList from '../components/beranda/CategoryList'
import Title from '../components/Title'
import LayoutNavAndFooter from '../layouts/LayoutNavAndFooter'
import Banner from '../components/beranda/Banner'

export default function Beranda(){

    return(
        <LayoutNavAndFooter>
            <Banner />
            
            <div className="flex flex-col gap-10 px-10 py-10">
                <div className="flex flex-row flex-wrap justify-center gap-5">
                    <CategoryList />
                </div>
                
                <div id="products">
                    <Title nameTitle={"Products"} />
                    <div className="flex flex-row flex-wrap gap-10 justify-center mt-10">
                        <ProductList />
                    </div>
                </div>
            </div>
        </LayoutNavAndFooter>
    )
}