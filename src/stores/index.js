import { configureStore } from '@reduxjs/toolkit'
import homepageReducer from './homepage'

const store = configureStore({
    reducer: {
        homepage: homepageReducer
    }
})

export default store