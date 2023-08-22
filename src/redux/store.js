import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { productApi } from './slices/productSlice'

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
})

// setupListeners(store.dispatch)

export default store