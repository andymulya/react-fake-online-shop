import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
    reducerPath: 'store',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
        getAllProductsCategories: builder.query({
            query: () => "products/categories"
        }),
        authLogin: builder.mutation({
            query: (body) => ({
                url: "auth/login",
                method: 'POST',
                body,
            })
        }),
        getUserWithId: builder.query({
            query: (id) => `users/${id}`
        }),
        postUser: builder.mutation({
            query: (body) => ({
                url: "users",
                method: 'POST',
                body
            })
        })
    })
})

export const { useAuthLoginMutation, useGetAllProductsQuery, useGetAllProductsCategoriesQuery, useGetUserWithIdQuery, usePostUserMutation } = storeApi