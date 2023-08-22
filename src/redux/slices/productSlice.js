import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
        getAllProductsCategories: builder.query({
            query: () => "products/categories"
        })
    })
})

export const { useGetAllProductsQuery, useGetAllProductsCategoriesQuery } = productApi