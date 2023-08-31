import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { storeApi } from './slices/storeSlice'
import cartSlice from './slices/cartSlice'
import searchSlice from './slices/searchSlice'

const store = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer,
        cart: cartSlice,
        search: searchSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
})

export default store