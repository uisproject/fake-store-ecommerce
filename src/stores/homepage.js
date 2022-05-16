import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProducts: {
    data: [],
    isLoading: true,
  },
  categories: {
    data: [],
    currentCategory: "all",
    isLoading: true,
  },
};

const productAPI = (categoryName) => {
  if (
    categoryName.toLowerCase() === "all" ||
    categoryName.toLowerCase() === undefined
  )
    return "https://fakestoreapi.com/products";

  return `https://fakestoreapi.com/products/category/${categoryName}`;
};

export const getProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async (categoryName, thunkAPI) => {
    try {
      const res = await axios.get(productAPI(categoryName));
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
);

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories.currentCategory = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.allProducts.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.allProducts.data = action.payload;
      state.allProducts.isLoading = false;
    },
    [getProducts.rejected]: (state) => {
      state.categories.isLoading = false;
    },
    [getCategories.pending]: (state) => {
      state.categories.isLoading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.categories.data = action.payload;
      state.categories.isLoading = false;
    },
    [getCategories.rejected]: (state) => {
      state.categories.isLoading = false;
    },
  },
});

export const { setCategory } = homepageSlice.actions;

export default homepageSlice.reducer;
