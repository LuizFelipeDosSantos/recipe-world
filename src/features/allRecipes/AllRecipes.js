import '../../App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectAllRecipes } from "./allRecipesSlice";
import { loadAllRecipes } from "./allRecipesSlice";
import { Link } from "react-router-dom";

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
                        <Link to={"/recipe"}  state={ recipe }>
                            <img src={recipe.strMealThumb} alt="recipe img" width={100}/>
                        </Link>                        
                        <Link to={"/recipe"}  state={ recipe }>
                            <h4>{recipe.strMeal}</h4>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default AllRecipes;
