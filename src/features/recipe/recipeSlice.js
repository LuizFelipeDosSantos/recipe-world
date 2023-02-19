import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadRecipe = createAsyncThunk(
  "recipe/getRecipe",
  async (idMeal) => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal);
    return response.data.meals[0];
  }
);

const sliceOptions = {
  name: "recipe",
  initialState: {
    recipe: {},
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [loadRecipe.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipe.fulfilled]: (state, action) => {
      state.recipe = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadRecipe.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const recipeSlice = createSlice(sliceOptions);

export const selectRecipe = (state) => state.recipe.recipe;

export default recipeSlice.reducer;
