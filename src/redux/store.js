import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { storeApi } from './slices/storeSlice'

const store = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
})

export default store