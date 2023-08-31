import { createSlice } from '@reduxjs/toolkit'
import { getToken } from '../../services/localStorageServices'

const token = getToken() || ''

export const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem(token.sub)) || [],
    reducers: {
        addCart(state, action){
            const findItemInCart = state.find((item) => item.id == action.payload.id)
            if(findItemInCart){
                findItemInCart.qty++
            }else{
                state.push(action.payload)
            }
        },
        addInitialState(state, action){
            state = action.payload
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