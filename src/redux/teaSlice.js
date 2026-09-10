import { createSlice } from '@reduxjs/toolkit'






const teaSlice = createSlice({
    name: 'tea',
    initialState: { order: false, tea: false, teaData:[],loading:false },
    reducers: {
        orderTea: (state) => {
            state.order = true
            state.tea=true
        },
        teaReady:(state)=>{
        },
        reset: (state) => {
            state.order = false
            state.tea = false
        }
    },
   
})

export const { orderTea, reset,teaReady } = teaSlice.actions
export default teaSlice.reducer
