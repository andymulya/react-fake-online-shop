import { createSlice } from "@reduxjs/toolkit";

const triggerSlice = createSlice({
    name: 'trigger',
    initialState: false,
    reducers: {
        handleIsTrigger(state, action){
            state = action.payload
            return state
        }
    }
})

export const{ handleIsTrigger } = triggerSlice.actions
export default triggerSlice.reducer