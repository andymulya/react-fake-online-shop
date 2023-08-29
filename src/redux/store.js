import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { storeApi } from './slices/storeSlice'
import cartSlice from './slices/cartSlice'

const store = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
})

export default store