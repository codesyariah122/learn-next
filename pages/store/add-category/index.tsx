import React from 'react'
import { Form } from '@/components/store'
import StoreLayout from '@/layouts/StoreLayout'
import { useCategoryProduct } from '@/hooks/useFetchCategory'

function AddCategory() {
  const {data: categories, isLoading: isLoadingCategory} = useCategoryProduct()

  return (
    <StoreLayout categories={categories}>
    <Form/>
    </StoreLayout>
  )
}

export default AddCategory