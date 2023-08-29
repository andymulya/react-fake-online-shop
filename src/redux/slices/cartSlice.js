import { createSlice } from '@reduxjs/toolkit'
import { getToken } from '../../services/localStorageServices'

const token = getToken() || ''

export const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem(token.sub)) || [],
    reducers: {
        addCart(state, action){
            const itemInCart = state.find((item) => item.id == action.payload.id)
            if(itemInCart){
                itemInCart.qty++
            }else{
                state.push(action.payload)
            }
        },
        addInitialState(state, action){
            return state = action.payload
        },
        editValueQtyItemById(state, action){
            const findItemInCart = state.find((state) => state.id == action.payload.idItem)
            if(findItemInCart){
                findItemInCart.qty = action.payload.counter
            }
        },
        removeAllItemCart(state){
            state.splice(0)
        },
    }
})

export const { addCart, removeAllCart, addInitialState, editValueQtyItemById } = cartSlice.actions
export default cartSlice.reducer