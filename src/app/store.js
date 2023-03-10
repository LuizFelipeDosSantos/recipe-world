import { configureStore } from "@reduxjs/toolkit";
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";
import recipesByCategoryReducer from "../features/recipesByCategory/recipesByCategorySlice";
import recipesByNameReducer from "../features/recipesByName/recipesByNameSlice";
import recipeReducer from "../features/recipe/recipeSlice";

export default configureStore({
  reducer: {
    allRecipes: allRecipesReducer,
    recipesByCategory: recipesByCategoryReducer,
    recipesByName: recipesByNameReducer,
    recipe: recipeReducer
  },
});