import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allProducts:{
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
            state.allProducts.isLoading = false
        },
    }
})

export default homepageSlice.reducer