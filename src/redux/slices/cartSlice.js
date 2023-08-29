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
        removeAllCart(state){
            state.splice(0)
        }
    }
})

export const { addCart, removeAllCart, addInitialState } = cartSlice.actions
export default cartSlice.reducer