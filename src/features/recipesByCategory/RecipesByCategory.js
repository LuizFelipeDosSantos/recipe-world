import '../../App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectRecipesByCategory } from "./recipesByCategorySlice";
import { loadRecipesByCategory } from "./recipesByCategorySlice";
import RecipeCard from '../../components/RecipeCard';

const RecipesByCategory = (props) => {
  const { category } = props;
  const recipesByCategory = useSelector(selectRecipesByCategory);
  const { isLoading } = useSelector((state) => state.recipesByCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipesByCategory(category));
  }, [dispatch, category]);

  return (
    <div className="recipes-container">
      { isLoading ? 
        <h1>
            Loading recipes...
        </h1>
        :
        <ul>
            {recipesByCategory.map((recipe) => (
                <li key={recipe.idMeal}>
                    <RecipeCard recipe={recipe} />
                </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default RecipesByCategory;
