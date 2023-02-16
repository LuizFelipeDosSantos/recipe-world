import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllRecipes = createAsyncThunk(
  "allRecipes/getAllRecipes",
  async () => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
    const json = await data.json();
    return json.meals;
  }
);

const sliceOptions = {
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [loadAllRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadAllRecipes.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadAllRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const allRecipesSlice = createSlice(sliceOptions);

export const selectAllRecipes = (state) => state.allRecipes.recipes;

export default allRecipesSlice.reducer;
