import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadRecipesByName = createAsyncThunk(
  "recipesByName/getRecipesByName",
  async (name) => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + name);
    return response.data.meals;
  }
);

const sliceOptions = {
  name: "recipesByName",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [loadRecipesByName.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipesByName.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadRecipesByName.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const recipesByName = createSlice(sliceOptions);

export const selectRecipesByName = (state) => state.recipesByName.recipes;

export default recipesByName.reducer;
