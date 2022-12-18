import { useRouter } from "next/router"
import { useCategoryProduct, useProductData } from "hooks/useFetchCategory"
import StoreLayout from "layouts/StoreLayout"


const Categories = () => {
    const router = useRouter()
    const routeCategory = (router.query.categories as string[]) || []
    const {data: categories, isLoading: isLoadingCategory} = useCategoryProduct()
    const {data: products, isLoading: isLoadingProduct} = useProductData()
    
    const getProductCategory = categories.data.map((category: any) => category).find((product: any) => product.slug === routeCategory[0])
    
    const findProducts = products ? products.data.map((item: any) => item).filter((product: any) => product.category_name === getProductCategory.name) : []

    const categoryName = routeCategory ? findProducts.map((product: any) => product.category_name) : 'No Category Product'


    return (
        <StoreLayout categories={categories} isLoading={isLoadingCategory} categoryName={categoryName}>
            <div className="grid grid-cols-1 mt-6">
                {
                    isLoadingProduct ?
                    <>
                        <h1 className="text-2xl text-blue-800">
                            Product is loading ...
                        </h1>
                    </> :
                    <>
                        <ul>
                            {
                                findProducts &&
                                findProducts.map((product: any) => (
                                    <>
                                        <li className="hover:text-blue-700 text-1xl cursor-pointer">
                                            {product.name}
                                        </li>
                                        <li>
                                            {product.description}
                                        </li>
                                    </>
                                ))
                            }
                        </ul>
                    </>
                }
            </div>
        </StoreLayout>
    )
}

export default Categories