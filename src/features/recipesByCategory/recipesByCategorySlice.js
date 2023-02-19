import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadRecipesByCategory = createAsyncThunk(
  "recipesByCategory/getRecipesByCategory",
  async (category) => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category);
    return response.data.meals;
  }
);

const sliceOptions = {
  name: "recipesByCategory",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [loadRecipesByCategory.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipesByCategory.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadRecipesByCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const recipesByCategory = createSlice(sliceOptions);

export const selectRecipesByCategory = (state) => state.recipesByCategory.recipes;

export default recipesByCategory.reducer;
