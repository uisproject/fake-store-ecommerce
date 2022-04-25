import { configureStore } from '@reduxjs/toolkit'
import homepageReducer from './homepage'
import productDetailReducer from './productDetail'

const store = configureStore({
    reducer: {
        homepage: homepageReducer,
        productDetail: productDetailReducer
    }
})

export default store