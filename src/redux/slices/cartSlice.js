import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart(state, action){
            const findItemInCart = state.find((product) => product.id == action.payload.id)
            if(findItemInCart){
                findItemInCart.qty++
            }else{
                state.push(action.payload)
            }
            console.log(findItemInCart)
        },
        addInitialState(state, action){
            state = (action.payload) ? action.payload : []
            return state
        },
        editValueQtyItemById(state, action){
            const findItemInCart = state.find((state) => state.id == action.payload.idItem)
            if(findItemInCart){
                findItemInCart.qty = action.payload.counter
            }
        },
        removeItemById(state, action){
            const findIndexItem = state.findIndex((cart) => cart.id == action.payload)
            if(findIndexItem != -1) state.splice(findIndexItem, 1)
        },
        removeAllItemCart(state){
            state.splice(0)
        },
    }
})

export const { addCart, removeAllItemCart, removeItemById, addInitialState, editValueQtyItemById } = cartSlice.actions
export default cartSlice.reducer