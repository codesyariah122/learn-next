import { useCategoryProduct } from "hooks/useFetchCategory"
import StoreLayout from "layouts/StoreLayout"


const Store = () => {
    const {data: categories, isLoading: isLoadingCategory} = useCategoryProduct()

    return (
        <StoreLayout categories={categories} isLoading={isLoadingCategory}>
            <div className="grid grid-cols-1 mt-6">
                <blockquote>
                    Welcome in my store, click the left of the link product category in left side.
                </blockquote>
            </div>
        </StoreLayout>
    )
}

export default Store