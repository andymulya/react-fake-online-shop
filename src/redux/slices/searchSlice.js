import { createSlice } from "@reduxjs/toolkit"

export const searchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        getInputSearch(state, action){
            state = action.payload
            return state
        },
        resetInitialState(state){
            state = ""
            return state
        }
    }
})

export const { getInputSearch, resetInitialState } = searchSlice.actions
export default searchSlice.reducer