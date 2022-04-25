import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allProducts:{
        data:[],
        isLoading:true
    },
    categories:{
        data:[],
        isLoading:true
    }
}

export const getAllProducts = createAsyncThunk('allProducts/getAllProducts', async (_,thunkAPI) => {
    try{
        const res = await axios.get('https://fakestoreapi.com/products')
        return res.data
    }catch(err){
        console.error(err)
    }
})
export const getCategories = createAsyncThunk('categories/getCategories', async (_,thunkAPI) => {
    try{
        const res = await axios.get('https://fakestoreapi.com/products/categories')
        return res.data
    }catch(err){
        console.error(err)
    }
})

const homepageSlice = createSlice({
    name:'homepage',
    initialState,
    reducers:{},
    extraReducers:{
        [getAllProducts.pending]:(state) => {
            state.allProducts.isLoading = true
        },
        [getAllProducts.fulfilled]:(state, action) => {
            state.allProducts.data = action.payload
            state.allProducts.isLoading = false
        },
        [getAllProducts.rejected]:(state) => {
            state.categories.isLoading = false
        },
        [getCategories.pending]:(state) => {
            state.categories.isLoading = true
        },
        [getCategories.fulfilled]:(state, action) => {
            state.categories.data = action.payload
            state.categories.isLoading = false
        },
        [getCategories.rejected]:(state) => {
            state.categories.isLoading = false
        },
    }
})

export default homepageSlice.reducer