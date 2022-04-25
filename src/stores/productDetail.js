import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading:true,
    data:[]
}

export const getProductDetail = createAsyncThunk('productDetail/getDetailProduct', async (id,thunkAPI) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
})

const productDetailSlice = createSlice({
    name:'productDetail',
    initialState,
    extraReducers:{
        [getProductDetail.pending]: (state) => {
            state.isLoading = true
        },
        [getProductDetail.fulfilled]: (state,action) => {
            state.data = action.payload
            state.isLoading = false
        },
        [getProductDetail.rejected]: (state,action) => {
            state.isLoading = false
        },
    }
})

export default productDetailSlice.reducer