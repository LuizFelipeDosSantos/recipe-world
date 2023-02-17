import '../../App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectAllRecipes } from "./allRecipesSlice";
import { loadAllRecipes } from "./allRecipesSlice";
import { Recipe } from '../../components/Recipe';

const AllRecipes = () => {
  const allRecipes = useSelector(selectAllRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllRecipes());
  }, [dispatch]);

  return (
    <div className="recipes-container">
      { isLoading ? 
        <h1>
            Loading recipes...
        </h1>
        :
        <ul>
            {allRecipes.map((recipe) => (
                <li key={recipe.idMeal}>
                    <div>
                        <Recipe recipe={recipe} />
                    </div>
                </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default AllRecipes;
