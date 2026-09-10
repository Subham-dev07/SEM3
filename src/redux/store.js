


import {configureStore} from '@reduxjs/toolkit'
import teaSlice from './teaSlice'

const store=configureStore({
    reducer:{
        tea:teaSlice
    }
})

export default store