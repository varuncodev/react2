import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'
import user from './userRe'

const store = configureStore({
    reducer: {
        counter:counterReducer,
        user,
           
    }
})

export default store;