import { configureStore } from "@reduxjs/toolkit";
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";
import recipesByCategoryReducer from "../features/recipesByCategory/recipesByCategorySlice";

export default configureStore({
  reducer: {
    allRecipes: allRecipesReducer,
    recipesByCategory: recipesByCategoryReducer
  },
});