import '../../App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectRecipesByName } from "./recipesByNameSlice";
import { loadRecipesByName } from "./recipesByNameSlice";
import RecipeCard from '../../components/RecipeCard';
import { useLocation } from 'react-router-dom';

const RecipesByName = () => {
  const name = useLocation().state;
  const recipesByName = useSelector(selectRecipesByName);
  const { isLoading } = useSelector((state) => state.recipesByName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipesByName(name));
  }, [dispatch, name]);

  return (
    <div className="recipes-container">
      { isLoading ? 
        <h1>
            Loading recipes...
        </h1>
        :
        <ul>
            {recipesByName.map((recipe) => (
                <li key={recipe.idMeal}>
                    <RecipeCard recipe={recipe} />
                </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default RecipesByName;
